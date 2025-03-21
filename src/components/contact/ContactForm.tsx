
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, Loader2, AlertTriangle } from "lucide-react";
import PackageSelector from "./PackageSelector";
import ContactDetails from "./ContactDetails";
import MessageInput from "./MessageInput";
import { 
  formSchema, 
  FormValues, 
  getPackageDisplayName, 
  sendContactForm,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY
} from "./contact-form-utils";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ContactFormProps {
  initialPackage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialPackage = "connected" }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDebugDialog, setShowDebugDialog] = useState(false);
  const [debugInfo, setDebugInfo] = useState<Record<string, any>>({});
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      phone: "",
      package: initialPackage,
      message: `I'm interested in the ${getPackageDisplayName(initialPackage)} package. Please contact me.`,
    },
  });

  useEffect(() => {
    if (initialPackage) {
      form.setValue("package", initialPackage);
      
      const packageName = getPackageDisplayName(initialPackage);
      form.setValue("message", `I'm interested in the ${packageName} package. Please contact me.`);
    }
  }, [initialPackage, form]);

  const onSubmit = async (data: FormValues) => {
    setError(null);
    setIsSubmitting(true);
    
    // Create debug info object
    const debugObj = {
      formData: { ...data },
      emailjsConfig: {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
      },
      browserInfo: {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
      },
      timestamp: new Date().toISOString(),
    };
    
    setDebugInfo(debugObj);
    
    try {
      console.log("Form submitted with data:", data);
      const success = await sendContactForm(data);
      
      if (success) {
        form.reset();
        
        // Delay navigation to allow the user to see the success message
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError("The form submission failed. Please check the console for more details or try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      let errorMessage = "An unexpected error occurred";
      
      if (error instanceof Error) {
        errorMessage += `: ${error.message}`;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-900">New Service Request</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2" 
                onClick={() => setShowDebugDialog(true)}
              >
                Show Debug Info
              </Button>
            </Alert>
          )}
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <PackageSelector control={form.control} />
              <ContactDetails control={form.control} />
              <MessageInput control={form.control} />
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" />
                    Submit Request
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Dialog open={showDebugDialog} onOpenChange={setShowDebugDialog}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Form Submission Debug Information</DialogTitle>
            <DialogDescription>
              This information can help identify issues with the form submission.
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 bg-slate-100 p-4 rounded text-xs font-mono overflow-auto">
            <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;

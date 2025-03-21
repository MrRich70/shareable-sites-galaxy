
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, Loader2 } from "lucide-react";
import PackageSelector from "./PackageSelector";
import ContactDetails from "./ContactDetails";
import MessageInput from "./MessageInput";
import { 
  formSchema, 
  FormValues, 
  getPackageDisplayName, 
  sendContactForm 
} from "./contact-form-utils";

interface ContactFormProps {
  initialPackage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialPackage = "connected" }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    console.log("Form submitted:", data);
    setIsSubmitting(true);
    
    try {
      const success = await sendContactForm(data);
      
      if (success) {
        form.reset();
        
        // Delay navigation to allow the user to see the success message
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-900">New Service Request</CardTitle>
      </CardHeader>
      <CardContent>
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
  );
};

export default ContactForm;

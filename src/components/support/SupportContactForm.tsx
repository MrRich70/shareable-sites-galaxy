
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ContactFormFields from "./ContactFormFields";
import MessageFormFields from "./MessageFormFields";
import { 
  supportFormSchema, 
  SupportFormValues, 
  sendSupportForm 
} from "./support-form-utils";

const SupportContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<SupportFormValues>({
    resolver: zodResolver(supportFormSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      best_time_to_call: "NA",
      subject: "Technical Support Request",
      message: "",
      address: "",
      city: "",
      communications_preference: "No preference selected",
    },
  });

  const onSubmit = async (data: SupportFormValues) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await sendSupportForm(data);
      
      if (result.success) {
        form.reset();
        navigate("/thank-you");
      } else {
        setError(result.error || "An unexpected error occurred");
      }
    } catch (error) {
      console.error("Support form submission error:", error);
      
      let errorMessage = "Failed to send your support request";
      if (error instanceof Error) {
        errorMessage += `: ${error.message}`;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-900">Submit a Support Request</CardTitle>
        <CardDescription>
          Fill out the form below and our support team will respond promptly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <ContactFormFields control={form.control} />
            <MessageFormFields control={form.control} />
            
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
                "Submit Support Request"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SupportContactForm;

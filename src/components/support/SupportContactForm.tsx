
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Loader2, MailIcon, Phone, User, Clock } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import emailjs from 'emailjs-com';
import { toast } from "sonner";
import { EMAILJS_SERVICE_ID, EMAILJS_PUBLIC_KEY } from "@/components/contact/contact-form-utils";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Support form specific template ID
const SUPPORT_TEMPLATE_ID = "template_cav6uez";

const supportFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().optional(),
  best_time_to_call: z.string().optional(),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message should be at least 10 characters" }),
});

type SupportFormValues = z.infer<typeof supportFormSchema>;

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
    },
  });

  const onSubmit = async (data: SupportFormValues) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      console.log("Starting email sending process for support form...");
      console.log("Form data to send:", JSON.stringify(data, null, 2));
      
      // Initialize EmailJS with the public key
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log("EmailJS initialized with public key");
      
      // Prepare template parameters for the support template
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        best_time_to_call: data.best_time_to_call || "Not specified",
        subject: data.subject,
        message: data.message,
        reply_to: data.email,
      };
      
      console.log("Prepared template params:", JSON.stringify(templateParams, null, 2));
      console.log("Service ID:", EMAILJS_SERVICE_ID);
      console.log("Template ID:", SUPPORT_TEMPLATE_ID);
      
      // Send email using the specified support template
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        SUPPORT_TEMPLATE_ID,
        templateParams
      );
      
      console.log("EmailJS Response:", response);
      console.log("Response Status:", response.status);
      console.log("Response Text:", response.text);
      
      toast.success("Your support request has been sent! We'll contact you shortly.");
      form.reset();
      navigate("/thank-you");
    } catch (error) {
      console.error("Support form submission error:", error);
      
      let errorMessage = "Failed to send your support request";
      
      if (error instanceof Error) {
        errorMessage += `: ${error.message}`;
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      } else if (typeof error === 'object' && error !== null) {
        console.error("Error details:", JSON.stringify(error));
        try {
          // @ts-ignore
          if (error.text) {
            // @ts-ignore
            errorMessage += `: ${error.text}`;
          }
        } catch (e) {
          console.error("Error parsing error object:", e);
        }
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
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
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <MailIcon className="mr-2 h-5 w-5 text-gray-400" />
                      <Input placeholder="your.email@example.com" type="email" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <User className="mr-2 h-5 w-5 text-gray-400" />
                      <Input placeholder="Your name" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Phone className="mr-2 h-5 w-5 text-gray-400" />
                      <Input placeholder="(555) 123-4567" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="best_time_to_call"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Best Time to Call</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Clock className="mr-2 h-5 w-5 text-gray-400 mt-2" />
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a time range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NA">Not Applicable</SelectItem>
                          <SelectItem value="8-12">8:00 AM - 12:00 PM</SelectItem>
                          <SelectItem value="12-5">12:00 PM - 5:00 PM</SelectItem>
                          <SelectItem value="5-7">5:00 PM - 7:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject *</FormLabel>
                  <FormControl>
                    <Input placeholder="Subject of your request" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your issue in detail"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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

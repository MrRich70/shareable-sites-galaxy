
import { z } from "zod";
import { EMAILJS_SERVICE_ID, EMAILJS_PUBLIC_KEY } from "@/components/contact/contact-form-utils";
import emailjs from 'emailjs-com';
import { toast } from "sonner";

// Support form specific template ID
export const SUPPORT_TEMPLATE_ID = "template_cav6uez";

// Form validation schema
export const supportFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().optional(),
  best_time_to_call: z.string().optional(),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message should be at least 10 characters" }),
});

export type SupportFormValues = z.infer<typeof supportFormSchema>;

export const sendSupportForm = async (data: SupportFormValues) => {
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
    return { success: true };
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
    
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
};

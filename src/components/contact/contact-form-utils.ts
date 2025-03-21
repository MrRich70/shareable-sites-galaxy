
import { z } from "zod";
import emailjs from 'emailjs-com';
import { toast } from "sonner";

// EmailJS configuration - updated with provided credentials
export const EMAILJS_SERVICE_ID = "service_yntuqop";
export const EMAILJS_TEMPLATE_ID = "template_contact";
export const EMAILJS_PUBLIC_KEY = "cX6fiJ2MPWoUFu62w"; // Public key
export const EMAILJS_PRIVATE_KEY = "flF7zl9qqoELVfyJs-HVk"; // Private key (should be used server-side only)
export const EMAILJS_USER_ID = EMAILJS_PUBLIC_KEY; // Using public key for client-side

// Form validation schema
export const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  address: z.string().min(5, { message: "Street address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  phone: z.string().optional(),
  package: z.string({
    required_error: "Please select a package",
  }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type FormValues = z.infer<typeof formSchema>;

export function getPackageDisplayName(packageValue: string) {
  switch (packageValue) {
    case "connected":
      return "Connected";
    case "accelerated":
      return "Accelerated";
    case "ultra":
      return "Ultra";
    default:
      return packageValue.charAt(0).toUpperCase() + packageValue.slice(1);
  }
}

export async function sendContactForm(data: FormValues) {
  try {
    console.log("Starting email sending process with detailed logging...");
    console.log("Form data to send:", JSON.stringify(data, null, 2));
    
    // Initialize EmailJS with the public key
    console.log("Initializing EmailJS with Public Key:", EMAILJS_PUBLIC_KEY);
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    const templateParams = {
      name: data.name,
      address: data.address,
      city: data.city,
      phone: data.phone || "Not provided",
      package: getPackageDisplayName(data.package),
      message: data.message,
      to_email: "njoycom7@gmail.com",
      subject: "NEW NJOY LEAD",
    };
    
    console.log("Prepared template params:", JSON.stringify(templateParams, null, 2));
    console.log("Service ID:", EMAILJS_SERVICE_ID);
    console.log("Template ID:", EMAILJS_TEMPLATE_ID);
    
    try {
      console.log("Sending email via EmailJS...");
      
      // Add more detailed log before sending
      console.table({
        'Service ID': EMAILJS_SERVICE_ID,
        'Template ID': EMAILJS_TEMPLATE_ID,
        'User ID': EMAILJS_PUBLIC_KEY,
        'Data Valid': !!data.name && !!data.address && !!data.message
      });
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log("EmailJS Response:", response);
      console.log("Response Status:", response.status);
      console.log("Response Text:", response.text);
      
      toast.success("Your request has been sent! We'll contact you shortly.");
      return true;
    } catch (emailError: any) {
      console.error("EmailJS send error details:", emailError);
      console.error("Error type:", typeof emailError);
      console.error("Error message:", emailError.message);
      console.error("Error stack:", emailError.stack);
      console.error("Error text:", emailError.text);
      console.error("Error status:", emailError.status);
      
      let errorMessage = "Failed to send your request";
      
      if (emailError instanceof Error) {
        errorMessage += `: ${emailError.message}`;
      } else if (typeof emailError === 'object' && emailError !== null) {
        errorMessage += `: ${JSON.stringify(emailError)}`;
      }
      
      toast.error(errorMessage);
      return false;
    }
  } catch (initError) {
    console.error("EmailJS initialization error:", initError);
    
    if (initError instanceof Error) {
      console.error("Error message:", initError.message);
      console.error("Error stack:", initError.stack);
    } else {
      console.error("Unknown error type:", typeof initError);
    }
    
    toast.error("Failed to initialize email service. Please try again later.");
    return false;
  }
}

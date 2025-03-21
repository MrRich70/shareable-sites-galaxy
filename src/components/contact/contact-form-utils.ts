
import { z } from "zod";
import emailjs from 'emailjs-com';
import { toast } from "sonner";

// EmailJS configuration
export const EMAILJS_SERVICE_ID = "service_yntuqop";
export const EMAILJS_TEMPLATE_ID = "template_contact";
export const EMAILJS_USER_ID = "FKFsCUbF1kbFmaxmY"; // Updated with a working user ID

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
    console.log("Starting email sending process...");
    
    // Initialize EmailJS with the user ID
    console.log("Initializing EmailJS with ID:", EMAILJS_USER_ID);
    emailjs.init(EMAILJS_USER_ID);
    
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
    
    console.log("Prepared template params:", templateParams);
    console.log("Service ID:", EMAILJS_SERVICE_ID);
    console.log("Template ID:", EMAILJS_TEMPLATE_ID);
    
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log("EmailJS Response:", response);
      toast.success("Your request has been sent! We'll contact you shortly.");
      return true;
    } catch (emailError) {
      console.error("EmailJS send error details:", emailError);
      let errorMessage = "Failed to send your request";
      
      if (emailError instanceof Error) {
        errorMessage += `: ${emailError.message}`;
      }
      
      toast.error(errorMessage);
      return false;
    }
  } catch (initError) {
    console.error("EmailJS initialization error:", initError);
    toast.error("Failed to initialize email service. Please try again later.");
    return false;
  }
}


import { z } from "zod";
import emailjs from 'emailjs-com';
import { toast } from "sonner";

// EmailJS configuration - updated with provided credentials
export const EMAILJS_SERVICE_ID = "service_yntuqop";
export const EMAILJS_TEMPLATE_ID = "template_a7dk8tg";
export const EMAILJS_PUBLIC_KEY = "cX6fiJ2MPWoUFu62w"; // Public key

// Form validation schema
export const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  address: z.string().min(5, { message: "Street address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  phone: z.string().optional(),
  best_time_to_call: z.string({
    required_error: "Please select a preferred time",
  }),
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
    
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log("EmailJS initialized with public key");
    
    // Ensure all form fields are properly included in the template parameters
    const templateParams = {
      from_name: data.name,
      name: data.name,
      address: data.address,
      city: data.city,
      phone: data.phone || "Not provided",
      best_time_to_call: data.best_time_to_call,
      package: getPackageDisplayName(data.package),
      message: data.message,
      to_email: "njoycom7@gmail.com",
      subject: "NEW NJOY LEAD",
      // Include all fields in a combined format for better email readability
      customer_details: `
Name: ${data.name}
Address: ${data.address}
City: ${data.city}
Phone: ${data.phone || "Not provided"}
Best time to call: ${data.best_time_to_call}
Package: ${getPackageDisplayName(data.package)}
Message: ${data.message}
      `.trim(),
    };
    
    console.log("Prepared template params:", JSON.stringify(templateParams, null, 2));
    console.log("Service ID:", EMAILJS_SERVICE_ID);
    console.log("Template ID:", EMAILJS_TEMPLATE_ID);
    
    // Using the proper SDK pattern for sending emails
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
  } catch (error) {
    console.error("EmailJS Error:", error);
    
    let errorMessage = "Failed to send your request";
    
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
    return false;
  }
}

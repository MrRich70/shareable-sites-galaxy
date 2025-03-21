
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Phone, User, MapPin, Home, Send } from "lucide-react";
import { toast } from "sonner";

// Form validation schema
const formSchema = z.object({
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

interface ContactFormProps {
  initialPackage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialPackage = "connected" }) => {
  const navigate = useNavigate();
  
  // Initialize form with default values
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

  // When initialPackage changes, update the form values
  useEffect(() => {
    if (initialPackage) {
      form.setValue("package", initialPackage);
      
      // Update message with the correct package name
      const packageName = getPackageDisplayName(initialPackage);
      form.setValue("message", `I'm interested in the ${packageName} package. Please contact me.`);
    }
  }, [initialPackage, form]);

  // Function to get display name for package
  function getPackageDisplayName(packageValue: string) {
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

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Show success message
    toast.success("Your request has been sent! We'll contact you shortly.");
    
    // Reset form
    form.reset();
    
    // Redirect to home page after short delay
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-blue-900">New Service Request</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="package"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Your Package</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="connected">Connected ($50/month)</SelectItem>
                      <SelectItem value="accelerated">Accelerated ($75/month)</SelectItem>
                      <SelectItem value="ultra">Ultra ($100/month)</SelectItem>
                    </SelectContent>
                  </Select>
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
                      <Input placeholder="John Doe" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address *</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                      <Input placeholder="123 Main St" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City *</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Home className="mr-2 h-5 w-5 text-gray-400" />
                      <Input placeholder="Anytown" {...field} />
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your needs"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              <Send className="mr-2" />
              Submit Request
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

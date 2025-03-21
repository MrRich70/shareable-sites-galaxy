
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Phone, User, MapPin, Home, Send, Info } from "lucide-react";
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

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState("connected");
  
  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      phone: "",
      package: "connected",
      message: "I'm interested in the Connected package. Please contact me.",
    },
  });

  // Parse the query parameters to get the selected package
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const packageParam = params.get("package");
    
    if (packageParam) {
      const packageValue = packageParam.toLowerCase();
      setSelectedPackage(packageValue);
      
      // Update the form values with the selected package
      form.setValue("package", packageValue);
      
      // Update message with the correct package name
      const packageName = getPackageDisplayName(packageValue);
      form.setValue("message", `I'm interested in the ${packageName} package. Please contact me.`);
    }
  }, [location.search, form]);

  // Function to get display name for package
  const getPackageDisplayName = (packageValue: string) => {
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
  };

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
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Get Connected with NJoy</h1>
          <p className="text-xl text-gray-700">
            We're excited to bring fast, reliable internet to your home or business!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Ready to Connect?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Quick Connection</h3>
                <p className="mb-4">
                  Get immediate assistance by calling our friendly customer service team:
                </p>
                <Button className="text-lg font-bold bg-blue-600 hover:bg-blue-700 mb-4" size="lg">
                  <Phone className="mr-2" />
                  (217) 330-6157
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Why Choose NJoy?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>No contracts or hidden fees</li>
                  <li>Local customer service</li>
                  <li>Fast installation within days, not weeks</li>
                  <li>Transparent pricing with no surprises</li>
                  <li>24/7 technical support</li>
                </ul>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <Info className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-blue-800 text-sm">
                    Fill in the contact form, and we'll reach out to schedule your installation at a time that works for you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
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
                        <FormLabel>City</FormLabel>
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;


import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Phone, User, MapPin, Home } from "lucide-react";
import { Control } from "react-hook-form";
import { FormValues } from "./contact-form-utils";

interface ContactDetailsProps {
  control: Control<FormValues>;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ control }) => {
  return (
    <>
      <FormField
        control={control}
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
        control={control}
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
        control={control}
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
        control={control}
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
    </>
  );
};

export default ContactDetails;

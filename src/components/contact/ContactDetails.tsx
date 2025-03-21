
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Phone, User, MapPin, Home, Clock, Mail } from "lucide-react";
import { Control } from "react-hook-form";
import { FormValues } from "./contact-form-utils";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface ContactDetailsProps {
  control: Control<FormValues>;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ control }) => {
  return (
    <>
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address *</FormLabel>
            <FormControl>
              <div className="flex">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <Input placeholder="your.email@example.com" type="email" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
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
      
      <FormField
        control={control}
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
    </>
  );
};

export default ContactDetails;

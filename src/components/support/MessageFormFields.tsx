
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { SupportFormValues } from "./support-form-utils";
import { Checkbox } from "@/components/ui/checkbox";

interface MessageFormFieldsProps {
  control: Control<SupportFormValues>;
}

const MessageFormFields: React.FC<MessageFormFieldsProps> = ({ control }) => {
  return (
    <>
      <FormField
        control={control}
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
        control={control}
        name="communications_preference"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Communication Preferences</FormLabel>
            <FormDescription>
              Select your preferred method of communication
            </FormDescription>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="email-preference"
                  checked={field.value === "Email"} 
                  onCheckedChange={() => field.onChange("Email")}
                />
                <label
                  htmlFor="email-preference"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I prefer email communication
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="phone-preference"
                  checked={field.value === "Phone"} 
                  onCheckedChange={() => field.onChange("Phone")}
                />
                <label
                  htmlFor="phone-preference"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I prefer phone communication
                </label>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
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
    </>
  );
};

export default MessageFormFields;

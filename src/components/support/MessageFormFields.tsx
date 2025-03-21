
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { SupportFormValues } from "./support-form-utils";

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

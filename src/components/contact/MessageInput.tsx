
import React, { useEffect } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormValues } from "./contact-form-utils";

interface MessageInputProps {
  control: Control<FormValues>;
}

const MessageInput: React.FC<MessageInputProps> = ({ control }) => {
  // This will log the keys at component load to verify they're accessible
  useEffect(() => {
    console.log("EmailJS Debug Info:");
    console.log("- Component: MessageInput loaded");
    console.log("- Keys available:", !!process.env.EMAILJS_USER_ID || !!window.EMAILJS_USER_ID);
  }, []);

  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Tell us about your needs"
              className="min-h-[100px] resize-none"
              {...field}
              onBlur={(e) => {
                console.log("Message field blur event:", e.target.value ? "Has content" : "Empty");
                field.onBlur();
              }}
              onFocus={() => {
                console.log("Message field focused");
              }}
              onChange={(e) => {
                console.log("Message changed, length:", e.target.value.length);
                field.onChange(e);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MessageInput;

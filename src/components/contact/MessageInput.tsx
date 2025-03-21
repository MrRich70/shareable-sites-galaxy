
import React, { useEffect } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormValues } from "./contact-form-utils";
import { Checkbox } from "@/components/ui/checkbox";

interface MessageInputProps {
  control: Control<FormValues>;
}

const MessageInput: React.FC<MessageInputProps> = ({ control }) => {
  // This will log the keys at component load to verify they're accessible
  useEffect(() => {
    console.log("EmailJS Debug Info:");
    console.log("- Component: MessageInput loaded");
    console.log("- Component initialized successfully");
  }, []);

  return (
    <>
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
                  id="contact-email-preference"
                  checked={field.value === "Email"} 
                  onCheckedChange={() => field.onChange("Email")}
                />
                <label
                  htmlFor="contact-email-preference"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I prefer email communication
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="contact-phone-preference"
                  checked={field.value === "Phone"} 
                  onCheckedChange={() => field.onChange("Phone")}
                />
                <label
                  htmlFor="contact-phone-preference"
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
    </>
  );
};

export default MessageInput;

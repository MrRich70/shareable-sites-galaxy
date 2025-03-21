
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormValues } from "./contact-form-utils";

interface MessageInputProps {
  control: Control<FormValues>;
}

const MessageInput: React.FC<MessageInputProps> = ({ control }) => {
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
              onBlur={field.onBlur}
              onFocus={() => console.log("Message field focused")}
              onChange={(e) => {
                console.log("Message changed:", e.target.value);
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

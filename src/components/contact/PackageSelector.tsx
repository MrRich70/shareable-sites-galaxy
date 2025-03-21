
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { FormValues } from "./contact-form-utils";

interface PackageSelectorProps {
  control: Control<FormValues>;
}

const PackageSelector: React.FC<PackageSelectorProps> = ({ control }) => {
  return (
    <FormField
      control={control}
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
  );
};

export default PackageSelector;

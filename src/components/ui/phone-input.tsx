import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value = '', onChange, error, helperText, ...props }, ref) => {
    const [displayValue, setDisplayValue] = useState(value);

    const formatPhoneNumber = (input: string) => {
      // Remove all non-digits
      const cleaned = input.replace(/\D/g, '');
      
      // Remove 998 prefix if present
      const withoutPrefix = cleaned.startsWith('998') ? cleaned.slice(3) : cleaned;
      
      // Limit to 9 digits
      const limited = withoutPrefix.slice(0, 9);
      
      // Format: (__) ___-__-__
      if (limited.length >= 7) {
        return `(${limited.slice(0, 2)}) ${limited.slice(2, 5)}-${limited.slice(5, 7)}-${limited.slice(7, 9)}`;
      } else if (limited.length >= 5) {
        return `(${limited.slice(0, 2)}) ${limited.slice(2, 5)}-${limited.slice(5)}`;
      } else if (limited.length >= 2) {
        return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
      } else if (limited.length > 0) {
        return `(${limited}`;
      }
      return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      const formatted = formatPhoneNumber(input);
      setDisplayValue(formatted);
      
      // Extract clean number for onChange
      const cleaned = input.replace(/\D/g, '');
      const withoutPrefix = cleaned.startsWith('998') ? cleaned.slice(3) : cleaned;
      const fullNumber = withoutPrefix.length > 0 ? `998${withoutPrefix}` : '';
      
      onChange?.(fullNumber);
    };

    const isValid = (phone: string) => {
      const cleaned = phone.replace(/\D/g, '');
      return cleaned.length === 12 && cleaned.startsWith('998');
    };

    return (
      <div className="space-y-2">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
            +998
          </div>
          <Input
            ref={ref}
            type="tel"
            value={displayValue}
            onChange={handleChange}
            className={cn(
              "pl-16 text-base",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            {...props}
          />
        </div>
        {helperText && (
          <p className={cn(
            "text-xs",
            error ? "text-destructive" : "text-muted-foreground"
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
import { Label, Textarea } from 'keep-react';
import { Controller } from 'react-hook-form';
import { cn } from '../../lib/cn';

interface AppTextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function AppTextarea({
  name,
  label,
  placeholder,
  className,
}: AppTextareaProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <fieldset className="space-y-1">
          <Label htmlFor={name}>{label}</Label>
          <Textarea
            id={name}
            placeholder={placeholder}
            className={cn(
              'border-gray-200 placeholder:text-gray-400',
              className,
              {
                'border border-error-200': Boolean(error),
              }
            )}
            aria-invalid={Boolean(error)}
            {...field}
          />
          {error && (
            <p className="text-error-400 text-sm" role="alert">
              {error?.message as string}
            </p>
          )}
        </fieldset>
      )}
    />
  );
}

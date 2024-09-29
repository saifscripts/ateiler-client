import { Label } from 'keep-react';
import { Controller } from 'react-hook-form';
import { cn } from '../../lib/cn';

interface AppSelectProps {
  name: string;
  options: { value: string; label: string }[];
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export default function AppSelect({
  name,
  label,
  placeholder,
  className,
  options,
  disabled,
}: AppSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <fieldset className="space-y-1">
          <Label htmlFor={name}>{label}</Label>
          <select
            {...field}
            id={name}
            className={cn(
              'w-full border border-metal-200 p-3 rounded-md bg-transparent',
              className,
              {
                'border border-error-200': Boolean(error),
              }
            )}
            aria-invalid={Boolean(error)}
            disabled={disabled}
          >
            <option value="">{placeholder}</option>
            {options?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
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

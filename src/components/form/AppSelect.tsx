import { InputIcon, Label } from 'keep-react';
import { Controller } from 'react-hook-form';
import { PiCaretUpDown } from 'react-icons/pi';
import { cn } from '../../lib/cn';

interface AppSelectProps {
  name: string;
  options: { value: string; label: string }[];
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export default function AppSelect({
  name,
  label,
  placeholder,
  className,
  options,
  disabled,
  icon,
}: AppSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <fieldset className="space-y-1">
          <Label htmlFor={name}>{label}</Label>
          <div className="relative">
            <select
              {...field}
              id={name}
              className={cn(
                'w-full border border-gray-200 p-3 rounded-lg bg-transparent ps-11 pe-8 placeholder:text-gray-400 focus-visible:ring-0  outline-gray-400',
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
            <InputIcon>{icon}</InputIcon>
            <PiCaretUpDown
              size={19}
              color="#AFBACA"
              className="absolute top-1/2 right-3 -translate-y-1/2"
            />
          </div>
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

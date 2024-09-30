import { Input, InputIcon, Label } from 'keep-react';
import { ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { cn } from '../../lib/cn';

interface AppInputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  icon?: ReactNode;
}

export default function AppInput({
  name,
  label,
  placeholder,
  type,
  className,
  icon,
}: AppInputProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <fieldset className="space-y-1">
          <Label htmlFor={name}>{label}</Label>

          <div className="relative">
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              className={cn('ps-11', className, {
                'border border-error-200': Boolean(error),
              })}
              aria-invalid={Boolean(error)}
            />
            <InputIcon>{icon}</InputIcon>
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

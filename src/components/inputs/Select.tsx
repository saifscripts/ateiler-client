import { InputIcon } from 'keep-react';
import { PiCaretUpDown } from 'react-icons/pi';
import { cn } from '../../lib/cn';

interface SelectProps {
  options: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  value?: string;
  icon?: React.ReactNode;
  className?: string;
  parentClassName?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function Select({
  options,
  defaultValue,
  onChange,
  value,
  icon,
  className,
  parentClassName,
  placeholder,
  disabled,
}: SelectProps) {
  return (
    <fieldset className={cn('relative w-full', parentClassName)}>
      <select
        name=""
        id=""
        className={cn(
          'bg-transparent w-full border ps-11 pe-8 py-[10px] placeholder:text-gray-400 focus-visible:ring-0 border-gray-200 rounded-lg outline-gray-400',
          className
        )}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
        disabled={disabled}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options?.map?.((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <InputIcon>{icon}</InputIcon>
      <PiCaretUpDown
        size={19}
        color="#AFBACA"
        className="absolute top-1/2 right-3 -translate-y-1/2"
      />
    </fieldset>
  );
}

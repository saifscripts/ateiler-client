import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { ZodSchema } from 'zod';
import { cn } from '../../lib/cn';
import { convertPropertiesToString } from '../../utils/convertPropertiesToString';

interface AppFormProps {
  schema?: ZodSchema;
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
  defaultValues?: FieldValues;
}

export default function AppForm({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
  ...props
}: AppFormProps) {
  const methods = useForm({
    resolver: schema && zodResolver(schema),
    defaultValues: convertPropertiesToString(defaultValues),
  });

  // wrap submit handler to reset form if onSubmit returns true
  const submitHandler: SubmitHandler<FieldValues> = async (data) => {
    const shouldReset = await onSubmit(data);

    if (shouldReset) {
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submitHandler)}
        className={cn('w-full space-y-6', className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

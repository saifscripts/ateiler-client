import { Input, InputIcon, Label, Textarea } from 'keep-react';
import { useFormContext } from 'react-hook-form';
import { BiStore } from 'react-icons/bi';
import { cn } from '../../lib/cn';
import categoryItems from '../categories/categoryItems';

const GeneralInformation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white p-3 rounded-md space-y-3">
      <h5 className="text-body-1 font-semibold">General Information</h5>
      <fieldset className="space-y-1">
        <Label htmlFor="name">Product Name</Label>
        <div className="relative">
          <Input
            id="name"
            type="text"
            placeholder="Product Name"
            className={cn('ps-11', {
              'border border-error-200': Boolean(errors.name),
            })}
            aria-invalid={Boolean(errors.name)}
            {...register('name')}
          />

          <InputIcon>
            <BiStore className="text-[#AFBACA]" />
          </InputIcon>
        </div>
        {errors.name && (
          <p className="text-error-400 text-sm" role="alert">
            {errors.name?.message as string}
          </p>
        )}
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="brand">Select Brand</Label>
        <select
          id="brand"
          className={cn('w-full border border-metal-200 p-3 rounded-md', {
            'border border-error-200': Boolean(errors.brand),
          })}
          aria-invalid={Boolean(errors.brand)}
          {...register('brand')}
        >
          <option value="">Select A Brand</option>
          {categoryItems.map((item) => (
            <option key={item.title}>{item.title}</option>
          ))}
        </select>
        {errors.brand && (
          <p className="text-error-400 text-sm" role="alert">
            {errors.brand?.message as string}
          </p>
        )}
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="description">Product Description</Label>

        <Textarea
          id="description"
          placeholder="Write Product Description Here"
          className={cn({
            'border border-error-200': Boolean(errors.description),
          })}
          aria-invalid={Boolean(errors.description)}
          {...register('description')}
        />
        {errors.description && (
          <p className="text-error-400 text-sm" role="alert">
            {errors.description?.message as string}
          </p>
        )}
      </fieldset>
    </div>
  );
};

export default GeneralInformation;

import { Input, InputIcon, Label } from 'keep-react';
import { Money } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { MdDiscount } from 'react-icons/md';
import { cn } from '../../lib/cn';

const PriceInformation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white p-3 rounded-md space-y-3">
      <h5 className="text-body-1 font-semibold">Price Information</h5>
      <div className="grid grid-cols-2 gap-3">
        <fieldset className="space-y-1">
          <Label htmlFor="price">Price</Label>
          <div className="relative">
            <Input
              placeholder="Price"
              type="number"
              className={cn('ps-11', {
                'border border-error-200': Boolean(errors.price),
              })}
              step={0.1}
              {...register('price')}
            />
            <InputIcon>
              <Money size={19} color="#AFBACA" />
            </InputIcon>
          </div>
          {errors.price && (
            <p className="text-error-400 text-sm" role="alert">
              {errors.price?.message as string}
            </p>
          )}
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="discount">Discount (%)</Label>
          <div className="relative">
            <Input
              placeholder="Discount"
              defaultValue={0}
              type="number"
              className={cn('ps-11', {
                'border border-error-200': Boolean(errors.discount),
              })}
              step={0.1}
              {...register('discount')}
            />
            <InputIcon>
              <MdDiscount className="text-[#AFBACA]" />
            </InputIcon>
          </div>
          {errors.discount && (
            <p className="text-error-400 text-sm" role="alert">
              {errors.discount?.message as string}
            </p>
          )}
        </fieldset>
      </div>
    </div>
  );
};

export default PriceInformation;

import { Input, InputIcon, Label } from 'keep-react';
import { useFormContext } from 'react-hook-form';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { cn } from '../../lib/cn';

const StockInformation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white p-3 rounded-md space-y-3">
      <h5 className="text-body-1 font-semibold">Stock Information</h5>

      <fieldset className="space-y-1">
        <Label htmlFor="stockQuantity">Stock Quantity</Label>
        <div className="relative">
          <Input
            placeholder="Quantity"
            type="number"
            className={cn('ps-11', {
              'border border-error-200': Boolean(errors.stockQuantity),
            })}
            aria-invalid={Boolean(errors.stockQuantity)}
            {...register('stockQuantity')}
          />
          <InputIcon>
            <MdProductionQuantityLimits size={19} color="#AFBACA" />
          </InputIcon>
        </div>
        {errors.stockQuantity && (
          <p className="text-error-400 text-sm" role="alert">
            {errors.stockQuantity?.message as string}
          </p>
        )}
      </fieldset>
    </div>
  );
};

export default StockInformation;

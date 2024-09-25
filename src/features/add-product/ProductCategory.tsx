import { Label } from 'keep-react';
import { useFormContext } from 'react-hook-form';
import { ICategory } from '../../interfaces';
import { cn } from '../../lib/cn';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';

const ProductCategory = () => {
  const { data: categories } = useGetCategoriesQuery('');
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white p-3 rounded-md space-y-3">
      <h5 className="text-body-1 font-semibold">Product Category</h5>
      <fieldset className="space-y-1">
        <Label htmlFor="category">Select Category</Label>
        <select
          id="category"
          className={cn('w-full border border-metal-200 p-3 rounded-md', {
            'border border-error-200': Boolean(errors.category),
          })}
          aria-invalid={Boolean(errors.category)}
          {...register('category')}
        >
          <option value="">Select A Category</option>
          {categories?.data?.map((item: ICategory) => (
            <option value={item._id} key={item._id}>
              {item.title}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-error-400 text-sm" role="alert">
            {errors.category?.message as string}
          </p>
        )}
      </fieldset>
    </div>
  );
};

export default ProductCategory;

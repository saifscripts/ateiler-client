import { BiCategory } from 'react-icons/bi';
import { ICategory } from '../../../interfaces';
import { useGetCategoriesQuery } from '../../../redux/features/categories/categoryApi';
import AppSelect from '../../form/AppSelect';

const ProductCategory = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery('');

  return (
    <div className="bg-white p-4 rounded-md space-y-4 h-max">
      <h5 className="text-body-1 font-semibold">Product Category</h5>

      <AppSelect
        name="category"
        label="Select Category"
        placeholder="Select A Category"
        disabled={isLoading}
        icon={<BiCategory size={20} color="#AFBACA" />}
        options={categories?.data?.map((item: ICategory) => ({
          value: item._id,
          label: item.title,
        }))}
      />
    </div>
  );
};

export default ProductCategory;

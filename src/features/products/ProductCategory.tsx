import AppSelect from '../../components/form/AppSelect';
import { ICategory } from '../../interfaces';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';

const ProductCategory = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery('');

  return (
    <div className="bg-white p-3 rounded-md space-y-3">
      <h5 className="text-body-1 font-semibold">Product Category</h5>

      <AppSelect
        name="category"
        label="Select Category"
        placeholder="Select A Category"
        disabled={isLoading}
        options={categories?.data?.map((item: ICategory) => ({
          value: item._id,
          label: item.title,
        }))}
      />
    </div>
  );
};

export default ProductCategory;

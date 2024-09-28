import { BiCategoryAlt } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import Select from '../../../components/inputs/Select';
import { ICategory } from '../../../interfaces';
import { useGetCategoriesQuery } from '../../../redux/features/categories/categoryApi';

export default function CategoryFilter() {
  const [params, setParams] = useSearchParams();
  const { data: categories, isLoading } = useGetCategoriesQuery('');

  const options = categories?.data?.map?.((category: ICategory) => ({
    label: category.title,
    value: category._id,
  }));

  return (
    <Select
      options={options}
      disabled={isLoading}
      value={params.get('category') || ''}
      onChange={(value) =>
        setParams((params) => {
          const currentParams = Object.fromEntries(params);
          if (!value) {
            delete currentParams.category;
          } else {
            currentParams.category = value;
          }
          return currentParams;
        })
      }
      placeholder="All Products"
      icon={<BiCategoryAlt size={20} color="#AFBACA" />}
    />
  );
}

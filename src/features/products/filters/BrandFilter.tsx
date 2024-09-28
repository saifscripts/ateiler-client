import { BiBarcode } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import Select from '../../../components/inputs/Select';
import { IBrand } from '../../../interfaces';
import { useGetBrandsQuery } from '../../../redux/features/brands/brandApi';

export default function BrandFilter() {
  const [params, setParams] = useSearchParams();
  const { data: brands, isLoading } = useGetBrandsQuery('');

  const options = brands?.data?.map?.((brand: IBrand) => ({
    label: brand.name,
    value: brand._id,
  }));

  return (
    <Select
      options={options}
      disabled={isLoading}
      value={params.get('brand') || ''}
      onChange={(value) =>
        setParams((params) => {
          const currentParams = Object.fromEntries(params);
          if (!value) {
            delete currentParams.brand;
          } else {
            currentParams.brand = value;
          }
          return currentParams;
        })
      }
      placeholder="All Brands"
      icon={<BiBarcode size={20} color="#AFBACA" />}
    />
  );
}

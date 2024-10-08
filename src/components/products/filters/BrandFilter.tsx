import { BiBarcode } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import { IBrand } from '../../../interfaces';
import { useGetBrandsQuery } from '../../../redux/features/brands/brandApi';
import Select from '../../inputs/Select';

export default function BrandFilter() {
  const [params, setParams] = useSearchParams();
  const { data: brands, isLoading } = useGetBrandsQuery('');

  const options = brands?.data?.map?.((brand: IBrand) => ({
    label: brand.name,
    value: brand._id,
  }));

  // handle change in brand filter
  const handleChange = (value: string) =>
    setParams(
      (params) => {
        const currentParams = Object.fromEntries(params);
        if (!value) {
          delete currentParams.brand;
        } else {
          currentParams.brand = value;
        }
        return currentParams;
      },
      { replace: true }
    );

  return (
    <Select
      options={options}
      disabled={isLoading}
      value={params.get('brand') || ''}
      onChange={handleChange}
      placeholder="All Brands"
      icon={<BiBarcode size={20} color="#AFBACA" />}
    />
  );
}

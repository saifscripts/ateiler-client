import { BiSort } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import Select from '../../inputs/Select';

export default function SortBy() {
  const [params, setParams] = useSearchParams();

  const options = [
    { label: 'Price: Low to High', value: 'price' },
    { label: 'Price: High to Low', value: '-price' },
    { label: 'Newest', value: '-createdAt' },
    { label: 'Oldest', value: 'createdAt' },
  ];

  const handleChange = (value: string) =>
    setParams(
      (params) => {
        const currentParams = Object.fromEntries(params);
        return { ...currentParams, sort: value };
      },
      { replace: true }
    );

  return (
    <Select
      options={options}
      value={params.get('sort') || ''}
      onChange={handleChange}
      parentClassName="max-w-xs"
      placeholder="Sort By"
      icon={<BiSort size={20} color="#AFBACA" />}
    />
  );
}

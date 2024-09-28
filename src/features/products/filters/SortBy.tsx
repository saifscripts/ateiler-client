import { BiSort } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import Select from '../../../components/inputs/Select';

export default function SortBy() {
  const [params, setParams] = useSearchParams();

  const options = [
    { label: 'Price: Low to High', value: 'price' },
    { label: 'Price: High to Low', value: '-price' },
    { label: 'Newest', value: '-createdAt' },
    { label: 'Oldest', value: 'createdAt' },
  ];

  return (
    <Select
      options={options}
      value={params.get('sort') || ''}
      onChange={(value) =>
        setParams((params) => {
          const currentParams = Object.fromEntries(params);
          return { ...currentParams, sort: value };
        })
      }
      parentClassName="max-w-xs"
      placeholder="Sort By"
      icon={<BiSort size={20} color="#AFBACA" />}
    />
  );
}

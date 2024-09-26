import { Badge } from 'keep-react';
import { BiBarcode } from 'react-icons/bi';
import { useGetBrandsQuery } from '../../redux/features/brands/brandApi';
import AddBrandModal from './AddBrandModal';

const Header = () => {
  const { data: brands } = useGetBrandsQuery('');
  const totalBrands = brands?.data?.length;

  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 sticky top-0 z-10 border-b border-metal-100">
      <div className="flex gap-4 items-center">
        <BiBarcode className="text-lg" />
        <h2 className="text-body-1 font-semibold">Brands</h2>
        <Badge color="secondary" className="dark:bg-metal-800 dark:text-white">
          {totalBrands || 0} brand{totalBrands > 1 ? 's' : ''}
        </Badge>
      </div>
      <AddBrandModal />
    </div>
  );
};

export default Header;

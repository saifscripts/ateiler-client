import { Badge } from 'keep-react';
import { BiBarcode } from 'react-icons/bi';
import { useGetBrandsQuery } from '../../redux/features/brands/brandApi';
import AddBrandModal from './AddBrandModal';

const Header = () => {
  const { data: brands } = useGetBrandsQuery('');
  const totalBrands = brands?.data?.length;

  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 sticky top-0 z-10 border-b border-gray-100 h-[64px]">
      <div className="flex gap-4 items-center">
        <div className="hidden min-[400px]:flex items-center gap-2">
          <BiBarcode className="text-base sm:text-lg text-metal-500" />
          <h2 className="text-body-1 font-semibold">Brands</h2>
        </div>
        <Badge
          color="secondary"
          variant="base"
          className="dark:bg-metal-800 dark:text-white h-auto rounded-md"
        >
          {totalBrands || 0} brand{totalBrands > 1 ? 's' : ''}
        </Badge>
      </div>
      <AddBrandModal />
    </div>
  );
};

export default Header;

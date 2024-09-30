import { BiBarcode, BiStore } from 'react-icons/bi';
import AppInput from '../../../components/form/AppInput';
import AppSelect from '../../../components/form/AppSelect';
import AppTextarea from '../../../components/form/AppTextarea';
import { IBrand } from '../../../interfaces';
import { useGetBrandsQuery } from '../../../redux/features/brands/brandApi';

const GeneralInformation = () => {
  const { data: brands, isLoading } = useGetBrandsQuery('');

  return (
    <div className="bg-white p-4 rounded-md space-y-4 h-max">
      <h5 className="text-body-1 font-semibold">General Information</h5>
      <AppInput
        name="name"
        label="Product Name"
        placeholder="Product Name"
        icon={<BiStore size={20} color="#AFBACA" />}
      />

      <AppSelect
        name="brand"
        label="Select Brand"
        placeholder="Select A Brand"
        disabled={isLoading}
        icon={<BiBarcode size={20} color="#AFBACA" />}
        options={brands?.data?.map((item: IBrand) => ({
          value: item._id,
          label: item.name,
        }))}
      />

      <AppTextarea
        name="description"
        label="Product Description"
        placeholder="Write Product Description Here"
      />
    </div>
  );
};

export default GeneralInformation;

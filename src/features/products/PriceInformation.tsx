import { Money } from 'phosphor-react';
import { MdDiscount } from 'react-icons/md';
import AppInput from '../../components/form/AppInput';

const PriceInformation = () => {
  return (
    <div className="bg-white p-4 rounded-md space-y-4 h-max">
      <h5 className="text-body-1 font-semibold">Price Information</h5>
      <div className="grid grid-cols-2 gap-4">
        <AppInput
          name="price"
          type="number"
          label="Price"
          placeholder="Price"
          icon={<Money size={20} color="#AFBACA" />}
        />

        <AppInput
          name="discount"
          type="number"
          label="Discount (%)"
          placeholder="Discount"
          icon={<MdDiscount size={20} color="#AFBACA" />}
        />
      </div>
    </div>
  );
};

export default PriceInformation;

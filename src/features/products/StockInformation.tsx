import { MdProductionQuantityLimits } from 'react-icons/md';
import AppInput from '../../components/form/AppInput';

const StockInformation = () => {
  return (
    <div className="bg-white p-3 rounded-md space-y-3">
      <h5 className="text-body-1 font-semibold">Stock Information</h5>

      <AppInput
        name="stockQuantity"
        type="number"
        label="Stock Quantity"
        placeholder="Quantity"
        icon={<MdProductionQuantityLimits size={19} color="#AFBACA" />}
      />
    </div>
  );
};

export default StockInformation;

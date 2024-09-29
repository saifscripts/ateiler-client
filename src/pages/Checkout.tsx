import {
  Button,
  Label,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableRow,
  toast,
} from 'keep-react';
import { At, Hash, MapPin, Phone, User } from 'phosphor-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { PiMapPinArea } from 'react-icons/pi';
import { z } from 'zod';
import AppForm from '../components/form/AppForm';
import AppInput from '../components/form/AppInput';
import { useAppSelector } from '../redux/hooks';

const FormSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(1, {
    message: 'Name is required',
  }),
  email: z.string({ required_error: 'Email is required' }).email({
    message: 'Invalid email address',
  }),
  phone: z.string({ required_error: 'Phone number is required' }).min(1, {
    message: 'Phone number is required',
  }),
  address: z.string({ required_error: 'Address is required' }).min(1),
  city: z.string().min(1).optional(),
  zip: z.string().min(1).optional(),
  paymentMethod: z.string().min(1).optional(),
});

const Checkout = () => {
  const {
    items: cartItems,
    totalPrice,
    vat,
  } = useAppSelector((state) => state.cart);

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <AppForm
      onSubmit={handleSubmit}
      schema={FormSchema}
      className="container my-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 space-y-0"
    >
      <div className="flex flex-col gap-4 bg-white px-6 py-4 rounded-lg">
        <h1 className="text-4xl font-semibold text-gray-700 mb-4">
          Delivery Information
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full justify-center">
          <AppInput
            label="Name"
            name="name"
            icon={<User size={16} className="text-gray-400" />}
            placeholder="Enter your name"
          />
          <AppInput
            label="Email Address"
            name="email"
            icon={<At size={16} className="text-gray-400" />}
            placeholder="Enter your email address"
          />
          <AppInput
            type="number"
            label="Phone Number"
            name="phone"
            icon={<Phone size={16} className="text-gray-400" />}
            placeholder="Enter your phone number"
          />
          <AppInput
            label="Address"
            name="address"
            icon={<PiMapPinArea size={16} className="text-gray-400" />}
            placeholder="Enter your address"
          />
          <AppInput
            label="City"
            name="city"
            icon={<MapPin size={16} className="text-gray-400" />}
            placeholder="Enter your city"
          />
          <AppInput
            type="number"
            label="Zip Code"
            name="zip"
            placeholder="12345"
            icon={<Hash size={16} className="text-gray-400" />}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white p-4 rounded-lg h-max">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3 text-center">
          Payment Summary
        </h2>
        <Table className="rounded-none">
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">Total Price</TableCell>
              <TableCell className="font-semibold">
                ${totalPrice.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vat (15%)</TableCell>
              <TableCell>${vat.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Net Price</TableCell>
              <TableCell className="font-semibold">
                ${(totalPrice + vat).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="flex justify-center items-center gap-6 px-6 py-4 border rounded-lg">
          <fieldset className="flex items-center gap-2">
            <Radio
              checked={true}
              variant="circle"
              id="cash"
              name="paymentMethod"
            />
            <Label htmlFor="cash">Cash on Delivery</Label>
          </fieldset>
          <fieldset
            onClick={() => toast.error('This payment method is not available!')}
            className="flex items-center gap-2"
          >
            <Radio disabled variant="circle" id="stripe" name="paymentMethod" />
            <Label htmlFor="stripe">Online (Stripe)</Label>
          </fieldset>
        </div>

        <Button
          type="submit"
          color="primary"
          className="w-full"
          disabled={cartItems.length === 0}
        >
          Place Order
        </Button>
      </div>
    </AppForm>
  );
};

export default Checkout;

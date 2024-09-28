import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from 'keep-react';
import { Minus, Plus, Trash } from 'phosphor-react';
import { Link } from 'react-router-dom';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Cart = () => {
  const dispatch = useAppDispatch();
  const {
    items: cartItems,
    totalPrice,
    vat,
  } = useAppSelector((state) => state.cart);

  return (
    <div className="container my-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
      <div className="flex flex-col gap-4 bg-white px-6 py-4 rounded-lg">
        {cartItems.length > 0 && (
          <>
            <h1 className="text-4xl font-semibold text-gray-700 mb-4">
              Cart Items
            </h1>
            <div className="flex flex-col gap-4 h-full justify-center">
              {cartItems?.map(({ product, quantity }) => (
                <div key={product._id} className="flex gap-4 border-b pb-4">
                  <div
                    className="size-20 bg-gray-200 rounded-lg flex-shrink-0"
                    style={{
                      backgroundImage: `url(${product.imageUrls[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  <div className="flex-1">
                    <h1 className="text-xl text-gray-800 font-bold">
                      {product.name}
                    </h1>
                    <p className="text-lg text-gray-700 font-semibold">
                      ${product?.price}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Badge
                        color="success"
                        className="text-[10px] px-3 py-1 h-auto rounded-md"
                      >
                        {product?.category?.title}
                      </Badge>
                      <Badge
                        color="primary"
                        className="text-[10px] px-3 py-1 h-auto rounded-md"
                      >
                        {product.brand.name}
                      </Badge>
                      <Badge
                        color={
                          Number(product?.stockQuantity) > 0
                            ? 'secondary'
                            : 'error'
                        }
                        className="text-[10px] px-3 py-1 h-auto rounded-md"
                      >
                        {Number(product?.stockQuantity) > 0
                          ? `Stock: ${product?.stockQuantity}`
                          : 'Out of Stock'}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
                      <div className="flex items-center bg-metal-100 w-max rounded-lg">
                        <Button
                          color="secondary"
                          size="sm"
                          className="rounded-lg p-2 h-auto"
                          onClick={() => {
                            dispatch(decreaseQuantity(product));
                          }}
                          disabled={Number(quantity) <= 1}
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="px-4 py-1">{quantity}</span>
                        <Button
                          color="secondary"
                          size="sm"
                          className="rounded-lg p-2 h-auto"
                          onClick={() => {
                            dispatch(increaseQuantity(product));
                          }}
                          disabled={
                            Number(quantity) >= Number(product.stockQuantity)
                          }
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      <div className="flex gap-2 items-center">
                        <p className="text-xl font-bold text-metal-600 p-2">
                          ${(product.price * quantity).toFixed(2)}
                        </p>
                        <div className="w-[1px] h-8 bg-metal-200" />
                        <div className="cursor-pointer p-2 rounded-md hover:bg-metal-50">
                          <Trash
                            onClick={() => {
                              dispatch(removeFromCart(product));
                            }}
                            size={32}
                            className="text-metal-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {cartItems.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl text-gray-500">No items in cart</p>
          </div>
        )}
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

        <Link to="/checkout">
          <Button
            color="primary"
            className="w-full"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

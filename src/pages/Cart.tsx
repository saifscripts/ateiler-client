import { Button, Table, TableBody, TableCell, TableRow } from 'keep-react';
import { Minus, Plus, Trash } from 'phosphor-react';
import { Link } from 'react-router-dom';
import BrandBadge from '../components/products/badges/BrandBadge';
import CategoryBadge from '../components/products/badges/CategoryBadge';
import StockBadge from '../components/products/badges/StockBadge';
import { cn } from '../lib/cn';
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
    <div className="container py-4 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
      <div className="flex flex-col gap-4 bg-white px-6 py-4 rounded-lg">
        {cartItems.length > 0 && (
          <>
            <h1 className="text-4xl font-semibold text-gray-700 mb-4">
              Cart Items
            </h1>
            <div className="flex flex-col gap-4 h-full justify-center">
              {cartItems?.map(({ product, quantity }, index) => (
                <div
                  key={product._id}
                  className={cn('flex gap-4 border-b pb-4', {
                    'border-none': index === cartItems.length - 1,
                  })}
                >
                  <div
                    className="size-16 sm:size-20 bg-gray-200 rounded-lg flex-shrink-0"
                    style={{
                      backgroundImage: `url(${product.imageUrls[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  <div className="flex-1 w-full overflow-hidden">
                    <h1 className="text-lg sm:text-xl text-gray-800 text-wrap font-bold inline-block">
                      {product.name}
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 font-semibold">
                      ${product?.price}
                    </p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <CategoryBadge>{product?.category?.title}</CategoryBadge>
                      <BrandBadge>{product.brand.name}</BrandBadge>
                      <StockBadge>{product.stockQuantity}</StockBadge>
                    </div>
                    <div className="flex gap-4 flex-col sm:flex-row justify-between items-center w-full mt-4">
                      <div className="flex items-center bg-metal-50 w-max rounded-lg self-start">
                        <Button
                          color="primary"
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
                          color="primary"
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
                      <div className="flex gap-2 items-center self-end">
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

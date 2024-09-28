import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../interfaces';

interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  totalPrice: number;
  vat: number;
}

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  vat: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      () => true,
      (state) => {
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
        state.vat = state.totalPrice * 0.15;
      }
    );
  },
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const isProductInCart = state.items.some(
        (item) => item.product._id === product._id
      );

      if (isProductInCart) {
        state.items = state.items.map((item) =>
          item.product._id === product._id &&
          item.quantity < Number(item.product.stockQuantity)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.items.push({ product, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      state.items = state.items.filter(
        (item) => item.product._id !== product._id
      );
    },
    increaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      state.items = state.items.map((item) =>
        item.product._id === product._id &&
        item.quantity < Number(item.product.stockQuantity)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      state.items = state.items.map((item) =>
        item.product._id === product._id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

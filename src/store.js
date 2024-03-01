import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./features/cart/cartSlice";
import WishListSlice from './features/wish/wishSlice';
import productListSlice from './features/productlist/productListSlice';
import detailProductSlice from './features/productlist/detailProductSlice';

export default configureStore({
    reducer: {
      cart: cartSlice.reducer,
      product : productListSlice.reducer,
      wishlist: WishListSlice.reducer,
      detail : detailProductSlice.reducer
      }
})

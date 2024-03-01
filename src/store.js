import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./features/cart/cartSlice";
// import WishListSlice from './features/wish/wishSlice';

export default configureStore({
    reducer: {
      cart: cartSlice.reducer,
      // wishlist: WishListSlice.reducer,
      }
})

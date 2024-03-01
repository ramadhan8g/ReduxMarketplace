import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    WishListItems: [],
  };


  export const WishListSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
      addItemToWishList: (state, action)=>{
        const newItem = action.payload

        const selectWishListIndex = state.WishListItems.findIndex(product => product.id === newItem.id);
        // state.WishListItems.push(newItem)

        // jika ada d index
      if (selectWishListIndex !== -1) {
        state.WishListItems[selectWishListIndex].quantity += 1;
        state.WishListItems[selectWishListIndex].totalPrice = state.WishListItems[selectWishListIndex].quantity * newItem.price
      } else {
        state.WishListItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price
        })
      }
      },
      removeItemFromWishList:()=>{}
    }
  })

  export const { addItemToWishList, removeItemFromWishList } = WishListSlice.actions;

  export default WishListSlice;


  // selector
  export const selectWishlistItems = (state) => state.wishlist.wishlistItems;
  export const selectTotalWishlistItems = (state) => state.wishlist.wishlistItems.length;
  

import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./features/productlist/ProducList";
import CartModal from "./features/cart/CartModal";
import WishList from "./features/wishlist/WishList";
// import WishModal from "./features/wish/WishModal";


function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
  const [isOpenModalWishList, setIsOpenModalWishList] = useState(false);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleHideModalCart = () => {
    setIsOpenModalCart(false);
  };

  const handleOpenModalWishList = () => {
    setIsOpenModalWishList(true);
  };

  const handleHideModalWishList = () => {
    setIsOpenModalWishList(false);
  };

  return (
  <>
      {isOpenModalCart ? (
        <CartModal handleHideModalCart={handleHideModalCart} />
      ) : null}

      {/* {isOpenModalWishList ? (
        <WishModal handleHideModalWishList={handleHideModalWishList} />
      ) : null} */}
      <Header
        handleOpenModalCart={handleOpenModalCart}
        handleOpenModalWishList={handleOpenModalWishList}
      />
      <main className="max-w-7xl mx-auto px-4">
        <ProductList />
        {/* <WishList /> */}
      </main>
    </>
  );
}

export default App;

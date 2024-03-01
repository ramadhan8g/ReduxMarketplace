import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./features/productlist/ProducList";
import CartModal from "./features/cart/CartModal";
// import WishList from "./features/wishlist/WishList";
// import WishModal from "./features/wish/WishModal";
import ProductModal from "./features/productlist/ProductModal";
import BuyProductModal from "./features/productlist/BuyProductModal";

function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
  // const [isOpenModalWishList, setIsOpenModalWishList] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenBuy, setIsOpenBuy] = useState(false);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleHideModalCart = () => {
    setIsOpenModalCart(false);
  };

  // const handleOpenModalWishList = () => {
  //   setIsOpenModalWishList(true);
  // };

  // const handleHideModalWishList = () => {
  //   setIsOpenModalWishList(false);
  // };

  const handleOpenModalBuyProduct = () => {
    setIsOpenBuy(true);
  };

  const handleOpenModalDetail = () => {
    setIsOpenDetail(true);
  };

  const handleHideModalDetail = () => {
    setIsOpenDetail(false);
  };

  const handleHideModalBuyProduct = () => {
    setIsOpenBuy(false);
  };

  return (
    <>
      {isOpenModalCart ? (
        <CartModal handleHideModalCart={handleHideModalCart} />
      ) : null}

      {/* {isOpenModalWishList ? (
        <WishModal handleHideModalWishList={handleHideModalWishList} />
      ) : null} */}

      {isOpenDetail ? (
        <ProductModal
          handleHideModalDetail={handleHideModalDetail}
          isOpenDetail={isOpenDetail}
          handleOpenModalCart={handleOpenModalCart}
          handleOpenModalBuyProduct={handleOpenModalBuyProduct}
        />
      ) : null}
      {isOpenBuy ? (
        <BuyProductModal
          handleHideModalBuyProduct={handleHideModalBuyProduct}
          isOpenBuy={isOpenBuy}
        />
      ) : null}
      <Header
        handleOpenModalCart={handleOpenModalCart}
        // handleOpenModalWishList={handleOpenModalWishList}
      />
      <main className="max-w-7xl mx-auto px-4">
        <ProductList
          handleOpenModalDetail={handleOpenModalDetail}
          handleOpenModalCart={handleOpenModalCart}
          handleOpenModalBuyProduct={handleOpenModalBuyProduct}
        />
        {/* <WishList /> */}
      </main>
    </>
  );
}

export default App;

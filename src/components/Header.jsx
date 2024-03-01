/* eslint-disable react/prop-types */
import CartIcon from "../assets/cart.svg";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { BsFillBagHeartFill } from "react-icons/bs";

const Header = ({ handleOpenModalCart, handleOpenModalWishList }) => {
  const cartTotalItems = useSelector(selectCartTotalItems);
  const WishListTotalItems = useSelector(selectCartTotalItems);

  return (
    <header className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 sm:h-[4.5rem]">
          <Link
            to="/"
            className="flex items-center text-gray-100 hover:scale-105 transition-all duration-100 ease-in-out"
          >
            <figure className="block mr-2">
              <img
                src="https://vitejs.dev/logo.svg"
                alt="Vite Logo"
                className="h-7 mobile:h-8"
              />
            </figure>
            <span className="text-gray-100 font-bold text-xl ">RShop</span>
          </Link>
          <div className="flex gap-5">
            <button type="button"className=" bg-blue-800 p-2 rounded-full" title="WishList" onClick={handleOpenModalWishList}>
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center">
                { WishListTotalItems}
              </span>
              <BsFillBagHeartFill className="text-white text-2xl" />
            </button>

            <button
              type="button"
              className="relative rounded-full bg-blue-800 p-2 text-gray-100"
              title="Shop"
              onClick={handleOpenModalCart}
            >
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center">
                {cartTotalItems}
              </span>
              <img src={CartIcon} alt="cart" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

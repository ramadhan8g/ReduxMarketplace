import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import Rating from "../Rating";
import { CiHeart } from "react-icons/ci";
import {
  addItemToWishList, selectWishlistItems
} from '../wish/wishSlice';
import {
  selectProduct,
  getProduct,
  searchProduct,
  sortingProduct,
  filterProduct,
  getBuyProduct,
} from "./productListSlice";
import { IoIosSearch, IoIosEye, IoIosHeart } from "react-icons/io";
import { getDetail } from "./detailProductSlice";



const ProductList = ({ handleOpenModalDetail, handleOpenModalBuyProduct }) => {
  // const [products, setProducts] = useState([]);
  const products = useSelector(selectProduct);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  // const cartItem = useSelector((state) => state.cart.cartItems);
  // console.log({cartItem})

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const data = await response.json();
  //       // setProducts(data);
  //       dispatch(getProduct(data));
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(getProduct(data));
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [dispatch]);

  const handleDetail = (product) => {
    const getProduct = products.find((item) => item.id === product.id);
    console.log(getProduct)
    dispatch(getDetail(getProduct));
    handleOpenModalDetail();
  };

 
  const handleBuyProduct = (item) => {
    dispatch(getBuyProduct(item.id));
    handleOpenModalBuyProduct();
  };

  const handleAddItemToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const handleClickWish = (product) => {
    dispatch(addItemToWishList(product));
  };

  // const isWishlistProduct = (product) => wishlistItems.find((item) => item.id === product.id);
  // console.log(isWishlistProduct)
  return (
    <div className="w-full h-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 xl:grid-cols-4">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="group bg-white rounded-xl border shadow p-4 w-full relative "
          >
            <div className="relative w-[80%] h-[350px] mx-auto overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-[300px] h-[300px] object-contain group-hover:scale-110 transition-all duration-500 ease-in-out "
              />
            </div>
            <div className="flex flex-col gap-6 mt-8 ">
              {/* <img 
               src={product.rating.rate}
               className="w-5 h-full"
              /> */}
              <div className="flex h-full w-full justify-between -mt-12 ">
                <div className="flex items-center w-full justify-between mt-8">
                  <Rating rating={product.rating.rate} />
                  <span className="text-lg">
                    {product.rating.count} Reviews
                  </span>
                </div>
              </div>
              <div>
                <button className=" hover:text-blue-800 text-slate-900  rounded-lg  ">{product.category}</button>
                <h3 className="font-bold text-xl">{product.title}</h3>
                <h3>{product.price}</h3>
              </div>

              <div className=" flex  gap-2 items-center justify-between lg:justify-center lg:w-[280px] flex-wrap ">
                <button
                  type="button"
                  className="bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-lg py-3 px-8"
                  onClick={() => handleBuyProduct(product)}
                >
                  BUY NOW
                </button>

                <button
                  type="button"
                  className="bg-slate-600 hover:bg-blue-800 text-white text-sm rounded-lg py-3 px-8"
                  onClick={() => handleAddItemToCart(product)}
                >
                  Add To Cart
                </button>

                <div className="absolute top-3 right-3">
                  <CiHeart
                    size={35}
                    // className={`cursor-pointer ${
                    //   isWishlistProduct(product)
                    //     ? 'stroke-red-500 fill-red-500 bg-red-500'
                    //     : 'stroke-gray-400'
                    // }}`}
                    onClick={() => handleClickWish(product)}
                   

                  />
                </div>
              <div className="absolute top-3 left-3">
                <button
                  type="button"
                  onClick={() => handleDetail(product)}
                  className="bg-slate-600 w-10 h-10 rounded-full text-white text-xl flex justify-center items-center hover:scale-110 transition-transform duration-150 ease-in-out"
                >
                  <IoIosEye aria-label="see" />
                </button>
              </div>
              
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

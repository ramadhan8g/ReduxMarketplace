import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import Rating from "../Rating";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const cartItem = useSelector((state) => state.cart.cartItems);
  // console.log({cartItem})

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleClickBuy = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">

      

      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="group bg-white rounded-xl border shadow p-4 w-full"
          >
            <div className="relative w-[80%] h-[350px] mx-auto overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <button
                type="button"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-lg py-3 px-8"
                onClick={() => handleClickBuy(product)}
              >
                BUY NOW
              </button>
              {/* <img 
              //  src={product.rating}
               className="w-5 h-full"
              /> */}
              <div className="flex h-full w-full justify-between  ">
                <div className="flex items-center w-full justify-between mt-8">
                  <Rating rating={product.rating.rate} />
                  <span className="text-lg">
                    {product.rating.count} Reviews
                  </span>
                </div>
              
              </div>

              <h3 className="font-bold">{product.title}</h3>
              <h3>{product.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

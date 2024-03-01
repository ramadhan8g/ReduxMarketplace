import Modal from "../../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectDetail } from "./detailProductSlice";
import { addItemToCart } from "../cart/cartSlice";
import { useToast } from "@chakra-ui/react";
import Rating from "../Rating";
import { getBuyProduct } from "./productListSlice";

const ProductModal = ({
  handleHideModalDetail,
  handleOpenModalCart,
  isOpenDetail,
  handleOpenModalBuyProduct,
}) => {
  const detailProduct = useSelector(selectDetail);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleAddItemToCart = (item) => {
    toast({
      title: "Successfully added item to cart",
      position: "top-right",
      status: "success",
      isClosable: true,
      duration: 3000,
    });
    dispatch(addItemToCart(item));
    handleOpenModalCart();
    handleHideModalDetail();
  };

  return (
    <Modal isOpen={isOpenDetail}>
      <section className="flex flex-col gap-6 p-1 sm:px-5 w-[350px] h-[760px] xl:w-[700px] xl:h-[500px]  md:w-[600px] md:h-[400px]">
        <div className="flex justify-between items-center h-10">
          <h1 className="text-xl lg:text-xl font-bold xl:-mt-4">
            Detail Product
          </h1>
          <button
            className="w-8 h-8 bg-red-600 rounded-full text-xl font-bold text-white  xl:-mt-4"
            onClick={handleHideModalDetail}
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-auto overflow-hidden items-center">
            <img
              src={detailProduct.image}
              alt="Product"
              className="w-full h-full object-cover xl:h-[220px]"
            />
          </div>

          <div className="flex flex-col items-center mt-2">
            <h1 className="text-md font-bold ">{detailProduct.title}</h1>
            <p className="max-h-[100px] overflow-auto text-lg xl:text-md">
              {detailProduct.description}
            </p>
          </div>

          <div className="w-full flex flex-col xl:flex items-center gap-3">
            <div className="self-start flex flex-col xl:flex-row xl:items-center xl:gap-10 xl:justify-between">
              <h3>Ratings</h3>
              <div className="mt-2">
                <Rating rating={detailProduct.rating.rate} /> |{" "}
                <span className="text-sm">
                  {detailProduct.rating.count} Reviews
                </span>
              </div>
              <div className="self-start xl:flex xL: items-center xl:gap-3 ">
                <h3>Category</h3>
                <hr className="bg-black h-[2px] xl:hidden" />
                <p className="bg-slate-300 p-2 rounded-full mt-2 capitalize">
                  {detailProduct.category}
                </p>
              </div>
            </div>

            <div className="self-start ">
              <h3 className="text-sm font-bold text-black xl:items-center ">
                Price: ${" "}
                {detailProduct.price.toLocaleString("en-US", {
                  styles: "currency",
                  currency: "USD",
                })}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-around xl:justify-center items-center gap-4 flex-wrap">
          <button
            type="button"
            className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-3 px-8"
            onClick={() => {
              dispatch(getBuyProduct(detailProduct.id));
              handleOpenModalBuyProduct();
              handleHideModalDetail();
            }}
          >
            BUY NOW
          </button>
          <button
            type="button"
            className="bg-slate-700 text-white hover:bg-slate-800 rounded-lg text-sm py-3 px-8"
            onClick={() => handleAddItemToCart(detailProduct)}
          >
            ADD TO CART
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default ProductModal;

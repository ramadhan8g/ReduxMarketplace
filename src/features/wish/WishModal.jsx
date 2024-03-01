// import { useSelector } from "react-redux";
// import Modal from "../../components/Modal";
// import { selectWishListtems } from "./wishSlice";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";

// const WishModal = ({ handleHideModalWishList }) => {
//   const WishListItems = useSelector(selectWishListtems);
//   return (
//     <Modal>
//       <div>
//         <div className=" flex text-center  gap-5 w-full h-full lg:w-[900px] ">
//           <button
//             className=" bg-blue-100 p-2"
//             onClick={handleHideModalWishList}
//           >
//             <MdOutlineArrowBackIosNew />
//           </button>

//           <h2 className="text-black font-semibold w-full ">WishList</h2>
//         </div>
//         {WishListItems.map((product) => {
//           return (
//             <div key={product.id} className="flex">
//               <img href={product.image} />

//               <p>dada</p>
//             </div>
//           );
//         })}
//       </div>
//     </Modal>
//   );
// };

// export default WishModal;

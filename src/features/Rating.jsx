import { IoIosStar } from "react-icons/io";
const Rating = ({ rating }) => {
  const starElements = [];

  for (let i = 1; i <= Math.round(rating); i++) {
    starElements.push(<IoIosStar key={i} className="text-yellow-400" />);
  }
  return (
    <span className="text-sm inline-flex bg-yellow-100 p-2 rounded-full items-center gap-1">{starElements} {rating}</span>
  );
};

export default Rating;



// const Rating = () => {
//   return (
//     <div>Rating</div>
//   )
// }

// export default Rating
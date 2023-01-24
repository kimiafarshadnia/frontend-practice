import {BiSun } from "react-icons/bi";
const Comment = ({ img, name, price, light, onClick, location, match }) => {
//  const array = ["wood", "lake", "sun", "moon", "sea"];
//   const images = array.map(image => {
//            return <img key={image} src={require(`../assets/images/${image}.jpeg`)} className="w-full" />
//         });
  return (
    <div className="border rounded border-green-600 p-2 md:h-80">
      <div className="flex justify-center items-center w-full h-40 mb-3">
        {img}
      </div>
      
      <div className="flex flex-col items-start justify-start">
        <p className="font-semibold"> {name}</p>
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-between items-center mt-3 mb-4">
            <BiSun className="mr-2"/>
            <p className="text-gray-700"> {light}</p>
          </div>
          <div className="flex justify-between items-center mt-3 mb-2">
            <p> {price}</p>
          </div>
        </div>
      </div>
      <div className="divBtnShowMore">
        <button className="w-full bg-green-500 hover:bg-green-600 transition-all ease-linear text-white text-light py-2 px-1 text-center rounded" onClick={onClick}>
          More
        </button>
      </div>
    </div>
  );
};

export default Comment;

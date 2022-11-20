import "./comment.css";
import { BiHeart } from "react-icons/bi";
const Comment = ({ img, name, price, explain, onClick, location, match }) => {
  return (
    <div className="comment">
      <img src={img} alt="img_of_plant" srcset="" />
      <p> {name}</p> <br />
      <div className="price">
        <BiHeart />
        <p> {price}</p>
      </div>
      <div className="divBtnShowMore">
        <button className="btnShowMore" onClick={onClick}>
          More
        </button>
      </div>
    </div>
  );
};

export default Comment;

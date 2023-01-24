import { useState } from "react";
import { toast } from "react-toastify";
import { addNewComment } from "../../services/addNewCommentService";
const NewComment = ({ history }) => {
  const [newComment, setNewComment] = useState({
    name: "",
    price: "",
    content: "",
  });

  const changeHandler = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  // const postCommentHandler = () => {
  //   http
  //     .post("/comments", { ...newComment, postId: 10 })
  //     .then((res) => http.get("/comments"))
  //     .then((res) => setComments(res.data))
  //     .catch();
  // };

  const postCommentHandler = async () => {
    try {
      await addNewComment({ ...newComment, postId: 10 });
      toast.success(" your comment added ");
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className="newcomment">
      <div>
        <label>name</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div>
        <label>price</label>
        <input type="text" name="price" onChange={changeHandler} />
      </div>
      <div>
        <label>body</label>
        <input type="textaarea" name="content" onChange={changeHandler} />
      </div>
      {/* <button type="submit" onClick={() => onAddPost(newComment)}>
        add comment
      </button> */}
      <button type="submit" className="button-add" onClick={postCommentHandler}>
        Add post
      </button>
    </div>
  );
};

export default NewComment;

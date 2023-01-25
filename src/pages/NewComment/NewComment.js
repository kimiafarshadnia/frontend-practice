import { useState } from "react";
import { toast } from "react-toastify";
import { addNewComment } from "../../services/addNewCommentService";
const NewComment = ({ history }) => {
  const [newComment, setNewComment] = useState({
    imagPlant:"",
    name: "",
    price: "",
    light:"",
    irrigation:"",
    explain: "",
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
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-start items-center w-full">
        <div className="flex flex-col mb-2 w-full">
          <label className="capitalize font-medium mr-3">Image URL</label>
          <input type="url" className="p-1 sm:p-2 border rounded focus-visible:border-green-400" name="imagPlant" onChange={changeHandler} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col mb-2 w-full md:w-2/4 md:mr-4">
          <label className="capitalize font-medium mr-3">name</label>
          <input type="text" className="p-1 sm:p-2 border rounded focus-visible:border-green-400" name="name" onChange={changeHandler} />
        </div>

        <div className="flex flex-col mb-2 w-full md:w-2/4">
          <label className="capitalize font-medium mr-3">price</label>
          <input type="number" className="p-1 sm:p-2  border rounded focus-visible:border-green-400" name="price" onChange={changeHandler} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full mb-4">
        <div className="flex flex-col mb-2 w-full md:w-2/4 md:mr-4">
          <label className="capitalize font-medium mr-3">light</label>
          <input type="text" className="p-1 sm:p-2  border rounded focus-visible:border-green-400" name="light" onChange={changeHandler} />
        </div>

        <div className="flex flex-col mb-2 w-full md:w-2/4">
          <label className="capitalize font-medium mr-3">irrigation</label>
          <input type="text" className="p-1 sm:p-2  border rounded focus-visible:border-green-400" name="irrigation" onChange={changeHandler} />
        </div>
      </div>

      <div className="flex flex-col mb-5 w-full">
        <label className="capitalize font-medium mr-3">explain</label>
        <textarea className="w-full  p-2 border rounded focus-visible:border-green-400" name="explain" rows={4} onChange={changeHandler} />
      </div>
      
      <button type="submit" className="bg-green-600 hover:bg-green-700 transition ease-linear text-white font-medium px-1 py-2 rounded w-full" onClick={postCommentHandler}>
        Add post
      </button>
    </div>
  );
};

export default NewComment;

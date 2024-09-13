import { useEffect, useState } from "react";
import { deleteComment } from "../../services/deleteCommentService";
import { getOneComment } from "../../services/getOneCommentService";
import { toast } from "react-toastify";
const FullComment = ({ match, history }) => {
  // console.log(history);
  console.log(match.params.id);
  const commentId = match.params.id;
  const [fullComment, setFullComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setFullComment(res.data))
        .catch();
    }
  }, [commentId]);

  let commentDetail = <p>select comment !</p>;

  if (commentId) commentDetail = <p>loading...</p>;

  // const deleteHandler = () => {
  //   http
  //     .delete(`/comments/${commentId}`)
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // };

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      toast.success(" Your Comment Deleted ");
      history.push("/");
      setFullComment(null);
    } catch (error) {}
  };

  if (fullComment) {
    commentDetail = (
      <div className="flex flex-col w-full p-3">
        <div className="flex flex-col md:flex-row justify-start w-full mb-5">
          <div className="w-full md:w-2/4 flex justify-center mb-4">
            <img src={fullComment.imagPlant} className="w-80 h-80 rounded" alt="plant_image" />
          </div>
          <div className="w-full px-2 md:w-2/4 flex flex-col justify-start items-start">
            <div className="flex mb-3">
              <label className="capitalize font-medium mr-3">name :</label>
              <p className="text-gray-700">{fullComment.name}</p>
            </div>
           
            <div className="flex mb-3">
              <label className="capitalize font-medium mr-3">price :</label>
              <p className="text-gray-700">{fullComment.price}</p>
            </div>

            <div className="flex mb-3">
              <label className="capitalize font-medium mr-3">light :</label>
              <p className="text-gray-700">{fullComment.light}</p>
            </div>
           
            <div className="flex mb-3">
              <label className="capitalize font-medium mr-3">irrigation :</label>
              <p className="text-gray-700">{fullComment.irrigation}</p>
            </div>

            <div className="mb-2">
              <label className="capitalize font-medium ">explain :</label>
              <p className="text-gray-700">{fullComment.explain}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button className="bg-red-600 hover:bg-red-700 transition ease-linear text-white font-medium px-1 py-2 rounded w-full" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;

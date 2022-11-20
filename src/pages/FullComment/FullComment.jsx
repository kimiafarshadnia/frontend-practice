import "./fullcomment.css";
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
      <div className="fullcomment">
        <div>
          <img src={fullComment.img} alt="" srcset="" />
        </div>
        <div>
          <label className="label">name :</label>
          <p>{fullComment.name}</p>
        </div>
        <br />
        <div>
          <label className="label">price :</label>
          <p>{fullComment.price}</p>
        </div>
        <br />
        <div>
          <label className="label">explain :</label>
          <p className="explain-comment">{fullComment.content}</p>
        </div>
        <br />
        <div className="position-button-delete">
          <button className="button-delete" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;

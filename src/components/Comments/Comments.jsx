import Comment from "./Comment/Comment";
import "./comments.css";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getAllComments } from "../../services/getAllCommentsServices";

import { Link } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);

  // const postCommentHandler = (newComment) => {
  //   http
  //     .post("/comments", { ...newComment, postId: 10 })
  //     .then((res) => http.get("/comments"))
  //     .then((res) => setComments(res.data))
  //     .catch();
  // };

  const renderComments = () => {
    let renderValue = <p>loading...</p>;
    if (error) {
      // renderValue = <p>fetching data failed</p>;
      toast.error("erorres");
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment img={c.img} name={c.name} price={c.price} body={c.body} />
        </Link>
      ));
    }

    return renderValue;
  };

  return <section>{renderComments()}</section>;
};

export default CommentsList;

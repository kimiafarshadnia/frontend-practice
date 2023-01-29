import {useParams} from "react-router-dom";
const PostPage = (props) => {
  // const id = props.match.params.id || 1;
  const {id} = useParams();
  console.log({id})
  return (
    <div className="text-white">
      <h2>post detail - {id}</h2>
      <div>{JSON.stringify({id})}</div>
    </div>
  );
};

export default PostPage;

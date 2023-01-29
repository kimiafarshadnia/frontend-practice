import { Link, useParams} from "react-router-dom";
import queryString from "query-string";
const Blog = ({ location, match }) => {
  // const parsed = queryString.parse(location.search);
  // console.log(parsed);
  // const id = match.params.id;
  const {id} = useParams();
  //htt request => axios.get('/blogs)
  return (
    <div className="flex flex-col justify-center items-center p-4">
     <div className="flex flex-col justify-center items-center w-80">
        <div className="h-12 w-100 bg-white text-gray-600">
            <p>Blog detail -{id}</p>
        </div>
     </div>
      <Link className="text-white" to={`/blogs/${parseInt(id) + 1}`}>go to next page ?</Link>
    </div>
  );
};

export default Blog;

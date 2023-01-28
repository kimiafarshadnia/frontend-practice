import { Link } from "react-router-dom";
import queryString from "query-string";
const Blog = ({ location, match }) => {
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  const id = match.params.id;
  return (
    <div className="flex justify-between items-center p-4">
     <div className="flex flex-col justify-center items-center w-80">
        <div className="flex justify-center items-center">
          <img src="https://i.pinimg.com/564x/03/51/2c/03512c214e8da45c5ca82a32461e69c5.jpg" alt="" />
        </div>
        <div className="h-12 w-100 bg-white text-gray-600 hover:text-black">
            <p>Blog detail -{id}</p>
        </div>
     </div>
      
      <Link to={`/blogs/${parseInt(id) + 1}`}>go to next page ?</Link>
    </div>
  );
};

export default Blog;

import { Link } from "react-router-dom";
import queryString from "query-string";
const Blog = ({ location, match }) => {
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  const id = match.params.id;
  return (
    <div>
      <h3>Blog detail -{id}</h3>
      <Link to={`/blogs/${parseInt(id) + 1}`}>go to next page ?</Link>
    </div>
  );
};

export default Blog;

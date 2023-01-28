import { Link } from "react-router-dom";
const items = [
  { name: "blog -1", to: "/blogs/1" },
  { name: "blog -2", to: "/blogs/2" },
  { name: "blog -3", to: "/blogs/3" },
];

const BlogPage = () => {
  return (
    <div className="w-full text-white flex flex-col justify-center items-center">
      <h4 className="text-2xl sm:text-5xl font-medium mb-8">BLOGS</h4>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-around items-center">
        {items.map((item) => {
          return (
            
          <div className="">
              <div className="bg-white h-44 w-44 rounded flex justify-center items-center text-gray-700 hover:text-black hover:shadow hover:shadow-white mb-4"  key={item.to}>
                <Link  to={{ pathname: item.to, search: "sort= name" }}>
                  {item.name}
                </Link>
              </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;

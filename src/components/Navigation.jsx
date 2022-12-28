import { useParams, NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/"},
  { name: "About Us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
  { name: "Post", to: "/post" },
];
const Navigation = () => {
  const params = useParams()
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
               className={(navData)=> (navData.isActive ? "activeLink" : "")}
               
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div>
        <img src="" alt="" srcset="" />
      </div>
    </nav>
  );
};

export default Navigation;

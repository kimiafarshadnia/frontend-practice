import { NavLink, withRouter } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "New comment", to: "/new-comment" },
];
const Navigation = ({ location }) => {
  return (
    <nav className="bg-gray-100 shadow-md py-3 flex items-center">
      <div className="px-2 text-green-600 font-bold sm:text-2xl mr-4">
        <h2>BRAND</h2>
      </div>
      <ul className="flex items-center">
        
        {items.map((item) => {
          return (
            <li className="mx-3 text-gray-500 hover:text-black text-xs sm:text-base transition-all ease-in font-medium" key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="text-black"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);

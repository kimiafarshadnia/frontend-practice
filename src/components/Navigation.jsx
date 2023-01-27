import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import 'boxicons';
const items = [
  { name: "Home", to: "/"},
  { name: "About us", to: "/about us" },
  { name: "Accessorys", to: "/accessorys" },
  { name: "blogs", to: "/blogs" },
];


const Navigation = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row w-full dark:bg-gray-800">

      <div className="w-full flex justify-between items-center md:hidden cursor-pointer"  >
        <div onClick={()=> setOpen(!open)} >
          <box-icon name={open ? 'x' : 'menu-alt-left'}></box-icon>
        </div>
      </div>

      <ul className={`transition-color md:flex items-center md:z-auto left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'h-32 block ' : 'h-0 hidden'} md:h-8`}>
        {items.map((item) => {
          return (
            <li key={item.to} className="font-medium hover:text-white mb-2 md:mb-0 md:ml-8 text-gray-200">
              <NavLink
                to={item.to}
               className={(navData)=> (navData.isActive ? "text-medium text-black" : "")}                                                                         
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

export default Navigation;

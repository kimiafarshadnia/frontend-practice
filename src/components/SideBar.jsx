import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="bg-white w-full sm:w-3/4 py-2 flex justify-center items-center mx-auto rounded-full">
      <ul className="flex justify-center items-center font-medium text-gray-700  text-xs sm:text-base">
        <li className="hover:text-black">
          <NavLink to="/accessorys/hat" className={(navData)=> (navData.isActive ? "text-orange-800" : "")}>
            {" "}
            Hat
          </NavLink>
        </li>
        <li className="mx-4 hover:text-black">
          <NavLink to="/accessorys/whip" className={(navData)=> (navData.isActive ? "text-orange-800" : "")}>
            {" "}
            the whip
          </NavLink>
        </li>
        <li  className=" hover:text-black">
          <NavLink to="/accessorys/gaiter" className={(navData)=> (navData.isActive ? "text-orange-800" : "")}>
            {" "}
            gaiter
          </NavLink>
        </li>
        <li  className="mx-4 hover:text-black">
          <NavLink to="/accessorys/saddlePad" className={(navData)=> (navData.isActive ? "text-orange-800" : "")}>
            {" "}
            Saddle Pad
          </NavLink>
        </li>
       
      </ul>
    </aside>
  );
};

export default SideBar;

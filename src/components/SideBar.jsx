import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <aside>
      <ul className="flex justify-around items-center bg-slate-600">
        <li>
          <NavLink to="/accessorys/hat" className={(navData)=> (navData.isActive ? "activeTab" : "")}>
            {" "}
            Hat
          </NavLink>
        </li>
        <li>
          <NavLink to="/accessorys/whip" className={(navData)=> (navData.isActive ? "activeTab" : "")}>
            {" "}
            the whip
          </NavLink>
        </li>
        <li>
          <NavLink to="/accessorys/gaiter" className={(navData)=> (navData.isActive ? "activeTab" : "")}>
            {" "}
            gaiter
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;

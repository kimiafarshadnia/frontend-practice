import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <aside>
      <ul className="aside">
        <li>
          <NavLink to="/profile/dashboard" className={(navData)=> (navData.isActive ? "activeTab" : "")}>
            {" "}
            dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/download" className={(navData)=> (navData.isActive ? "activeTab" : "")}>
            {" "}
            download
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;

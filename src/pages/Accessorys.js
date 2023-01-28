import SideBar from "../components/SideBar";
import { Outlet} from "react-router";
import Slider from './../components/Slider';


function Accessorys() {

  return (
    <>
      <Slider/>
      <SideBar/>
      <Outlet/>
    </>
  );
}

export default Accessorys;
  
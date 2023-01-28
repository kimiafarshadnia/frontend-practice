import SideBar from "../components/SideBar";
import { Outlet} from "react-router";
import Slider from './../components/Slider';


function Accessorys() {

  return (
    <>
      <SideBar/>
      <Slider/>
      <Outlet/>
    </>
  );
}

export default Accessorys;
  
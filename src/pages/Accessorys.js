import SideBar from "../components/SideBar";
import { Outlet} from "react-router";


function Profile() {

  return (
    <>
      <p>my name is kimia farshadnia </p>

      <SideBar />
      <Outlet/>
    </>
  );
}

export default Profile;
  
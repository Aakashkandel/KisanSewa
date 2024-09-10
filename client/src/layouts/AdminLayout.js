import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div class="flex">
        <div>
          <Sidebar />
        </div>
        <div class="w-full ml-20"> 
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

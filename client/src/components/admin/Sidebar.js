import { AiFillDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiFertilizerBag, GiMedicines } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { MdOutlinePestControl, MdReviews } from "react-icons/md";
import axios from "../../api/adminaxios";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

const Sidebar = () => {
  const checkapi = async () => {
    console.log("i am hitted");

    try {
      const response = await axios.post("test");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App  ">
      <div className="bg-blue-600 h-[40px]">
        <div></div>

        <div className="sidebar fixed  top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <h1 className="font-bold text-gray-200 text-2xl  ml-3">
                Kisan<span>Sewa</span>
              </h1>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
                // onClick={openSidebar()}
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <AiFillDashboard />
              Dashboard
            </div>
          </Link>
          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin/category"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <BiCategory />
              Category
            </div>
          </Link>
          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin/fertilizers"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <GiFertilizerBag />
              Fertilizers
            </div>
          </Link>

          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin/medicines"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <GiMedicines />
              Medicines
            </div>
          </Link>

          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin/seeds"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <FaSeedling />
              Seeds
            </div>
          </Link>
          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin/pesticides"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <MdOutlinePestControl />
              Pesticides
            </div>
          </Link>

          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin/reviews"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <MdReviews />
              Review
            </div>
          </Link>

          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin/users"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <FaUsers />
              Users
            </div>
          </Link>


          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/admin/land"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <FaUsers />
              Land
            </div>
          </Link>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <Link
            className="text-[15px] ml-4 text-gray-200 font-bold"
            to={"/logout"}
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <IoLogOut />
              Logout
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

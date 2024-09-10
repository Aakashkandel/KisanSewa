import axios from "../../api/useraxios";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
export default function Profile() {
  const [profile, setProfile] = useState([]);
  const [land, setLand] = useState([]);

  const [LIN1, setLIN1] = useState("");
  const [LIN2, setLIN2] = useState("");

  const handleLIN2Change = (e) => {
    e.preventDefault();
    setLIN2(e.target.value);
  }

  const handleLIN1Change = (e) => {
    e.preventDefault();
    setLIN1(e.target.value);
  }

  const fetchData = async () => {
    try {
      const res = await axios.get("/user/details");
      console.log(res.data);
      setProfile(res.data);

     
    } catch (error) {
      console.log(error);
      toast.error("unable to Submitted");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const landRegister = async (e) => {
    e.preventDefault();
const area="0"
    const formData = new FormData();
    formData.append("LIN1", LIN1);
    formData.append("LIN2", LIN2);
    formData.append("area",area);


    try {
      const response = await axios.post("/land/add", formData);
       toast.success("Successfully Submitted");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
    <>
      <div>
        <ToastContainer />
        <div>
          <div class="bg-gray-100">
            <div class="">
              <div class="text-right mx-5 ">
                <button
                  type="button"
                  class="text-gray-200 my-5 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2   dark:focus:ring-purple-900"
                >
                  Change Password
                </button>
              </div>

              <div class="  w-48 flex items-center justify-center m-auto border-gray-700 border-4 rounded-full   h-48">
                <img class="w-40 p-4 " src="./image/image1.png" alt="" />
              </div>
              <div>
                <h2 class="font-bold text-2xl text-gray-700 text-center my-2">
                  Aakash Kandel
                </h2>
              </div>

              <div class=" w-9/12 mt-5 m-auto text-center">
                <button
                  type="button"
                  class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Change Photo
                </button>
              </div>
              <div class=" text-center flex justify-center">
                {profile.status == 0 ? (
                  <div class="text-gray-700 font-bold flex item-center ">
                    <span class="text-red-600 mx-1 text-xl">
                      <MdPendingActions />
                    </span>
                    <div>Pending</div>
                  </div>
                ) : (
                  <div class="text-gray-700 font-bold flex item-center ">
                    <span class="text-green-600 mx-1 text-xl">
                      <FaCheckCircle />
                    </span>
                    <div>Verified</div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div class="font-bold text-gray-200 bg-green-900  w-9/12 m-auto my-7 py-1 px-2 rounded">
                Vendor Info
              </div>

              <div class="grid grid-cols-2 gap-4  w-9/12 m-auto">
                <div class="flex  justify-between bg-gray-200  rounded-xl p-2">
                  <div class="font-bold text-gray-800">Email:</div>
                  {profile.email ? profile.email : "No email"}
                </div>

                <div class="flex  justify-between bg-gray-200  rounded-xl p-2">
                  <div class="font-bold text-gray-800">Phone:</div>
                  {profile.phone}
                </div>

                <div class="flex  justify-between bg-gray-200  rounded-xl p-2">
                  <div class="font-bold text-gray-800 w-4/12">Citizen No.:</div>
                  {profile.citizenship}
                </div>

                <div class="flex  justify-between bg-gray-200  rounded-xl p-2">
                  <div class="font-bold text-gray-800">Address:</div>
                  {profile.address}
                </div>
              </div>

              <div class=" w-9/12 my-5 m-auto text-right">
                <button
                  type="button"
                  class="text-white  bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-gray-300 font-medium rounded-xl text-sm px-10 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Edit
                </button>
              </div>

              <div class="font-bold text-white text-gray-200 bg-green-900   w-9/12 m-auto my-7 py-1 px-2 rounded">
                Land Details
              </div>
              <form onSubmit={landRegister}>
                <div class="grid grid-cols-2 gap-4  w-9/12 m-auto">
                  <div class="mb-4">
                    <label
                      for="title"
                      
                      class="block text-sm font-medium text-gray-600"
                    >
                      LIN(Landowner Identify Number){" "}
                      <span class="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      name="LIN1"
                      value={LIN1}
                      onChange={handleLIN1Change}
                      id="title"
                      class="mt-1 block px-2 text-gray-700 font-semibold w-full border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>

                  <div class="mb-4">
                    <label
                      value={LIN2}
                      onChange={handleLIN2Change}
                      for="title"
                      class="block text-sm font-medium text-gray-600"
                    >
                      LIN 2(Landowner Identify Number)
                    </label>
                    <input
                      type="text"
                      name="LIN2"
                      class="mt-1 block px-2 text-gray-700 font-semibold w-full border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <div class=" w-9/12 my-5 m-auto text-right">
                  <button
                    type="submit"
                    class="text-white  bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-xl text-sm px-10 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

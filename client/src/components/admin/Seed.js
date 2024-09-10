import axios from "../../api/adminaxios";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Seed = () => {
  let i = 1;
  const navigate = useNavigate();

  const [seed, setSeed] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("/seed");
      if (res) {
        setSeed(res.data);
        console.log(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [seed]);

  const handleDelete = async (id) => {
    const res = await axios.delete(`/seed/${id}/delete`);
    if (res.status === 200) {
      toast.success("Deleted SuccessFully !");
      navigate("/admin/seeds");
    }
  };

  const deleteState = useRef(false);

  const showdiv = () => {
    deleteState.current = true;
  };

  const hidediv = () => {
    deleteState.current = false;
  };

  return (
    <>
      <div className=" ml-[18%] p-5">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl font-bold text-gray-700">Seeds</h2>
            <div className="flex items-center space-x-2">
              <button className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-gray-500">
                <i className="bx bx-search"></i>
              </button>
              <button className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-gray-500">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
            </div>
          </div>

          <div className="mt-10 text-right">
            <a
              href="/admin/addseed"
              className="bg-blue-600 text-white p-3 rounded-lg"
            >
              Add Seeds
            </a>
          </div>

          <div className="mt-2">
            <div className="mt-4">
              <div className="overflow-x-auto bg-white rounded-lg shadow-xs">
                <table className="w-full whitespace-nowrap">
                  <thead>
                    <tr className="font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-green-900">
                      <th className="px-4 py-3">S.N</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Type</th>
                      <th className="px-4 py-3">Description</th>
                      <th className="px-4 py-3">Quantity</th>
                      <th className="px-4 py-3">Image</th>
                      <th className="px-4 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {seed.map((fert) => (
                      <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">{i++}</div>
                        </td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{fert.name}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{fert.type}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">
                                {fert.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{fert.quantity}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{fert.image}</p>
                            </div>
                          </div>
                        </td>

                        <td className="border p-3 text-center">
                          <Link
                            to={`/admin/editcategory/${fert.id}`}
                            className="bg-blue-500 text-white p-2 mx-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <button
                            className="bg-red-500 text-white p-2 mx-2 rounded-lg"
                            onClick={showdiv}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <div
                            id="delete-popup"
                            ref={deleteState}
                            className={`fixed ${
                              deleteState.current==true ? "block" : "hidden"
                            } inset-0 flex items-center justify-center w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100`}
                          >
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                              <p className="text-gray-700 font-bold text-lg">
                                Are you sure you want to delete this Product?
                              </p>
                              <div className="mt-4 flex justify-end">
                                <button
                                  id="confirm-delete"
                                  onClick={()=>handleDelete(fert.id)}
                                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                  Confirm
                                </button>
                                <button
                                  onClick={hidediv}
                                  className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seed;

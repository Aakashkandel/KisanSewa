import react, { useState, useEffect } from "react";
import axios from "../../api/adminaxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function EditCategory() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get(`/category/${id}`);
      if (res) {
        setName(res.data.name);
        setPriority(res.data.priority);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlePriorityChange = (e) => {
    e.preventDefault();
    setPriority(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("priority", priority);

    try {
      const res = await axios.post(`/category/${id}/update`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res.data);
      if (res.status === 200) {
        toast.success("Cateegory Updated", {
          theme: "colored",
        });
        navigate("/admin/category");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="w-11/12 mx-auto ml-[10%]">
        <div className="flex flex-col w-full max-w-3xl mx-auto mt-10 bg-gray-100">
          <div className="p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Edit Category
            </h2>
            <form
              action=""
              method="POST"
              enctype="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="mb-4  ">
                  <label
                    for="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    className="mt-1 bg-white outline-indigo-500 block w-full p-2  border-gray-300 rounded-md shadow-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    for="title"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Priority
                  </label>
                  <input
                    type="number"
                    name="priority"
                    id="title"
                    value={priority}
                    onChange={handlePriorityChange}
                    className="mt-1 outline-indigo-500 block bg-white border-black p-2 w-full border-gray-300 rounded-md shadow-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <a
                  href="/admin/category"
                  className="px-4 py-2 bg-gray-300 mx-2 text-black rounded-lg shadow-md"
                >
                  Back
                </a>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 mx-2 text-white rounded-lg shadow-md"
                >
                 Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

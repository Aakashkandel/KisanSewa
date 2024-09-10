import { useState, useEffect } from "react";
import axios from "../../api/adminaxios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMedicine() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get(`/medicine/${id}`);
      if (res) {
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setQuantity(res.data.quantity);
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

  const handleTypeChange = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileimage = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("image", fileimage);

    try {
      const res = await axios.post(`/medicine/${id}/update`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res.data);
      if (res.status === 200) {
        toast.success("Fertilizer Updated", {
          theme: "colored",
        });
        navigate("/admin/medicines");
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
              Add Medicine
            </h2>
            <form
              action=""
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="mb-4  ">
                  <label className="block text-sm font-medium text-gray-600">
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
                  <label className="block text-sm font-medium text-gray-600">
                    Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    value={type}
                    onChange={handleTypeChange}
                    className="mt-1 outline-indigo-500 block bg-white border-black p-2 w-full border-gray-300 rounded-md shadow-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Discription
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="mt-1 outline-indigo-500 block bg-white border-black p-2 w-full border-gray-300 rounded-md shadow-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Quantity
                  </label>
                  <input
                    name="quantity"
                    id="title"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="mt-1 outline-indigo-500 block bg-white border-black p-2 w-full border-gray-300 rounded-md shadow-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Image
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="mt-1 outline-indigo-500 block bg-white border-black p-2 w-full border-gray-300 rounded-md shadow-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <a
                  href="/admin/medicine"
                  className="px-4 py-2 bg-gray-300 mx-2 text-black rounded-lg shadow-md"
                >
                  Back
                </a>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 mx-2 text-white rounded-lg shadow-md"
                >
                  Save Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

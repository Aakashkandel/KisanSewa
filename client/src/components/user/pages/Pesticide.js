import React, { useEffect, useState } from "react";
import axios from "../../../api/useraxios";


function Pesticide() {
  const [data, setData] = useState();
  const getPesticide = async () => {
    try {
      const res = await axios.get("/pesticide");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPesticide();
  }, []);
  return (
    <>
      {data?.map((f) => (
        <div class="rounded overflow-hidden shadow-lg">
          <img
            class="w-5/12"
            src={`http://100.10.10.18:8000/api/images/${f.image}`}
            alt="River"
          />
          <div class="px-6 py-4 overflow-hidden">
            <div class="font-bold text-xl mb-2">{f.name}</div>
            <p class="text-gray-700 text-base h-20 overflow-hidden">
              {f.description}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              type="submit"
              class="px-4 py-2 bg-indigo-600 mx-2 text-white rounded-lg shadow-md"
            >
              Request Now
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pesticide;

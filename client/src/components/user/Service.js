import react from "react";

import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Ferrtilizer from "./pages/Ferrtilizer";
import Medicine from "./pages/Medicine";
import Pesticide from "./pages/Pesticide";
import Seed from "./pages/Seed";
import Seacrh from "./Search";

export default function Service() {
  const [fert, setFertilizer] = useState(false);
  const [pesti, setPesti] = useState(false);
  const [medi, setMedi] = useState(false);
  const [seed, setSeed] = useState(false);
  const handelChange = (c) => {
    switch (c) {
      case 1:
        setSeed(true);
        setFertilizer(false);
        setPesti(false);
        setMedi(false);
        break;
      case 2:
        setSeed(false);
        setFertilizer(true);
        setPesti(false);
        setMedi(false);
        break;
      case 3:
        setSeed(false);
        setFertilizer(false);
        setPesti(true);
        setMedi(false);
        break;
      case 4:
        setSeed(false);
        setFertilizer(false);
        setPesti(false);
        setMedi(true);
      default:
        console.log("error");
    }
  };

  const [keyword, setKeyword] = useState();

  const handelKeyChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value);
  };

  return (
    <>
      <div class="container mx-auto my-15 px-4 py-2">
        <div class="flex flex-col md:flex-row justify-between items-center mb-6">
          <div class="relative w-full md:w-1/2">
            <input
              type="text"
              name="keyword"
              value={keyword}
              onChange={handelKeyChange}
              class="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for products..."
            />
            <Link
              to={`search/result/${keyword}`}
              class="absolute right-2 top-2 py-1 px-4 bg-blue-500 text-white rounded-full"
              type="submit"
            >
              Search
            </Link>
          </div>

          <div class="w-full text-right my-15 mx-20 font-bold text-gray-600">
            Choose Category
          </div>

          <div class="flex mt-10 md:mt-10 space-x-4 ">
            <div class="">
              <div>
                <button
                  onClick={() => handelChange(1)}
                  class="absolute right-[27%] top-15 py-1 px-4 bg-blue-500 text-white rounded-xl"
                >
                  Seed
                </button>
              </div>
              <div>
                <button
                  onClick={() => handelChange(2)}
                  class="absolute right-60 top-15 py-1 px-4 bg-blue-500 text-white rounded-xl"
                >
                  Fertilizer
                </button>
              </div>
              <div>
                <button
                  class="absolute right-32 top-15 py-1 px-4 bg-indigo-500 text-white rounded-xl"
                  onClick={() => handelChange(3)}
                >
                  Pesticides
                </button>
              </div>
              <div>
                <button
                  class="absolute right-2 top-15 py-1 px-4 bg-green-500 text-white rounded-xl"
                  onClick={() => handelChange(4)}
                >
                  Medicine
                </button>
              </div>
            </div>
          </div>
        </div>
        see
        <Seacrh fert pesti medi seed keyword />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  my-10">
          {fert && <Ferrtilizer />}
          {medi && <Medicine />}
          {pesti && <Pesticide />}
          {seed && <Seed />}
        </div>
      </div>
    </>
  );
}

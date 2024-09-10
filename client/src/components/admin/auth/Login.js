import React, { useState } from "react";
import axios from "../../../api/adminaxios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await axios.post("/admin/login", {
        email,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-8/12 p-6 sm:p-12">
          <div className="text-green-900 font-semibold  text-3xl font-bold">
            Kisan<span className="text-indigo-400">Sewa</span>
          </div>
          <div className=" flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Admin Login</h1>
            <div className="w-full flex-1 mt-1">
              <div className="flex flex-col items-center"></div>

              <div className="my-12 border-b text-center">
                <h2 className="font-semibold text-gray-700">
                  Please login for access features
                </h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mx-auto  grid grid-cols-1 gap-4 p-4 w-8/12  ">
                  <div>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>

                  <div>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="password"
                      placeholder=" Enter Password"
                      name="password"
                    />
                  </div>
                </div>
                <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Login</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 w-7/12 text-center hidden lg:flex">
          <div className="w-full bg-contain bg-center bg-no-repeat login-photo"></div>
        </div>
      </div>
    </div>
  );
}

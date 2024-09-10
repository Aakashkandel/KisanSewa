import React, { useState } from "react";
import axios from '../../../api/useraxios'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      const res = await axios.post("/login", {
        username,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("username",res.data.name);
        localStorage.setItem("userToken", res.data.token);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-8/12 p-6 sm:p-12">
          <div class="text-green-900 font-semibold  text-3xl font-bold">
            Kisan<span class="text-indigo-400">Sewa</span>
          </div>
          <div class=" flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-extrabold">Login</h1>
            <div class="w-full flex-1 mt-1">
              <div class="flex flex-col items-center"></div>

              <div class="my-12 border-b text-center">
                <h2 class="font-semibold text-gray-700">
                  Please login for access features
                </h2>
              </div>

                <form onSubmit={handleSubmit}>
                    <div class="mx-auto  grid grid-cols-1 gap-4 p-4 w-8/12  ">
                        <div>
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                            type="text"
                            placeholder=" Enter Username"
                            name="username"
                        />
                        </div>

                        <div>
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                            type="password"
                            placeholder=" Enter Password"
                           name="password"
                        />
                        </div>
                    </div>
                    <button class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg
                        class="w-6 h-6 -ml-2"
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
                        <span class="ml-3">Login</span>
                    </button>
                    <p class="mt-6 text-xs text-gray-600 text-center">
                        I agree to abide by templatana's
                        <a href="#" class="border-b border-gray-500 border-dotted">
                        Terms of Service
                        </a>
                        and its
                        <a href="#" class="border-b border-gray-500 border-dotted">
                        Privacy Policy
                        </a>
                    </p>
                </form>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-indigo-100 w-7/12 text-center hidden lg:flex">
          <div class="w-full bg-contain bg-center bg-no-repeat login-photo"></div>
        </div>
      </div>
    </div>
  );
}

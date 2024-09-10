import React, { useState } from "react";
import axios from "../../../api/useraxios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const address = e.target.address.value;
    const citizenship = e.target.citizenship.value;
    const phone = e.target.phone.value;

    console.log(name,password)
    try {
      const res = await axios.post("/user/register", {
        phone,
        password,
        name,
        email,
        citizenship,
        address,
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("username",res.data.user);
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
            <h1 class="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div class="w-full flex-1 mt-1">
              <div class="flex flex-col items-center"></div>

              <div class="my-12 border-b text-center">
                <h2 class="font-semibold text-gray-700">
                  Please register for access features
                </h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div class="mx-auto  grid grid-cols-2 gap-4 p-4  ">
                  <div>
                    <input
                      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Enter Full Name"
                      name="name"
                    />
                  </div>
                  <div>
                    <input
                      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="text"
                      placeholder="Email"
                      name="email"
                      defaultValue=''
                    />
                  </div>
                  <div>
                    <input
                      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div>
                    <input
                      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="number"
                      placeholder="Phone no."
                      name="phone"
                    />
                  </div>
                  <div>
                    <input
                      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="text"
                      placeholder="Address"
                      name="address"
                    />
                  </div>

                  <div>
                    <input
                      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="text"
                      placeholder="Citizenship Number"
                      name="citizenship"
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
                  <span class="ml-3">Sign Up</span>
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
          <div class=" w-full bg-contain bg-center bg-no-repeat login-photo"></div>
        </div>
      </div>
    </div>
  );
}

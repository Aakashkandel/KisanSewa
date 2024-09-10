import React from "react";

export default function Home() {
  return (
    <>
      <div>
        
        <div class="flex flex-wrap">
          <div class="w-full sm:w-8/12 mb-10">
            <div class="container mx-auto h-full sm:p-10">
              <nav class="flex px-4 justify-between items-center">
                <div class="text-4xl font-bold">
                  किसान <span class="text-green-700">सेवा</span>
                </div>
                <div>
                  <img
                    src="https://image.flaticon.com/icons/svg/497/497348.svg"
                    alt=""
                    class="w-8"
                  />
                </div>
              </nav>
              <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                <div class="w-full">
                  <h1 class="text-4xl lg:text-6xl font-bold">
                    Find your <span class="text-green-700">greeny</span> stuff
                    for your room
                  </h1>
                  <div class="w-20 h-2 bg-green-700 my-4"></div>
                  <p class="text-xl mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae maiores neque eaque ea odit placeat, tenetur
                    illum distinctio nulla voluptatum a corrupti beatae tempora
                    aperiam quia id aliquam possimus aut.
                  </p>
                  <button class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                    Learn More
                  </button>
                </div>
              </header>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Leafs"
            class="w-full h-48 object-cover sm:h-screen sm:w-4/12"
          />
        </div>

        <h2 class="text-2xl text-center bg-gray-200 font-bold text-green-900">
          Quick Request
        </h2>

        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="./image/fertilizer.jpg" alt="River" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Fertilizer</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
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

          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="./image/pes.jfif" alt="River" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Pesticides</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
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

          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="./image/medicine.jfif" alt="River" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Medicine</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
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
        </div>
      </div>
      <h2 class="text-2xl text-center bg-gray-200 font-bold text-green-900">
        Our Vision
      </h2>
      <section class="bg-white py-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-medium text-gray-900">Mission</h3>
                <p class="mt-2 text-base text-gray-500">
                  We aim to make the world a better place through innovation and
                  collaboration.
                </p>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-medium text-gray-900">Values</h3>
                <p class="mt-2 text-base text-gray-500">
                  We believe in honesty, integrity, and respect for all
                  individuals.
                </p>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-medium text-gray-900">Vision</h3>
                <p class="mt-2 text-base text-gray-500">
                  We envision a world where technology is used to solve the most
                  pressing issues facing humanity and improve people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

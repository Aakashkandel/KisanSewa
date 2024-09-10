import React from 'react'

export default function PesticideFom() {
  return (
    <div>


    <div class="flex flex-wrap">
        <div class="w-full sm:w-8/12 mb-10 h-full">
            <div class="bg-gray-200 w-11/12 m-auto my-5 p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-green-800 mb-4">Fill Form For Request</h2>
                <form action="" method="POST" enctype="multipart/form-data">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="mb-4  ">
                            <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
                            <input type="text" name="name" value="Aakash Kandel" id="name" readonly
                                class="mt-1 py-3 px-3 text-gray-700 font-semibold bg-gray-100 block w-full  border-gray-300 rounded-md shadow-sm"
                                required/>

                        </div>

                        <div class="mb-4  ">
                            <label for="Citizenship no." class="block text-sm font-medium text-gray-600">Citizenship
                                No.</label>
                            <input type="text" name="name" value="35-07-4565-455" id="name" readonly
                                class="mt-1 py-3 px-3 text-gray-700 font-semibold bg-gray-100 block w-full  border-gray-300 rounded-md shadow-sm"
                                required/>

                        </div>

                        <div class="mb-4">
                            <label for="category"
                                class="block text-sm font-medium text-gray-600  outline-purple-500 ">Pesticides
                                Name</label>
                            <h2 type="text" name="title" value="125.78*2.5kg" id="title"
                                class="mt-1 block text-green-700 font-bold w-full border-gray-300 rounded-md shadow-sm">
                                vitamin A
                            </h2>

                        </div>






                        <div class="mb-4">
                            <label for="title" class="block text-sm font-medium text-gray-600">Pesticides in stock</label>
                            <h2 type="text" name="title" value="125.78*2.5kg" id="title"
                                class="mt-1 block text-green-700 font-bold w-full border-gray-300 rounded-md shadow-sm">
                                45 pieces</h2>

                        </div>

                        <div class="mb-4">
                            <label for="title" class="block text-sm font-medium text-gray-600">Request Pesticide</label>
                            <input type="text" name="title" value="33" id="title"
                                class="mt-1 block bg-gray-100 w-full border-gray-300 rounded-md shadow-sm" required/>

                        </div>










                        <div class="mb-4">
                            <label for="description"
                                class="block text-sm font-medium text-gray-600  outline-indigo-500">Message
                                (optional)</label>
                            <textarea name="description" id="description" rows="4"
                                class="mt-1 block bg-gray-100 w-full border-gray-300 rounded-md shadow-sm"
                                required></textarea>

                        </div>





                    </div>

                    <div class="flex justify-end mt-6">
                        <a href="" class="px-4 py-2 bg-gray-300 mx-2 text-black rounded-lg shadow-md">Back</a>
                        <button type="submit" class="px-4 py-2 bg-indigo-600 mx-2 text-white rounded-lg shadow-md">Send
                            Request</button>
                    </div>
                </form>
            </div>

            <h2 class="text-2xl  bg-gray-200 font-bold text-green-900">Description</h2>
            <div class="w-32 h-1 bg-indigo-700 "></div>

            <div>
                <p class="p-2 font-semibold text-gray-700 mx-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sed aut quaerat beatae, excepturi
                    voluptates quis pariatur architecto eveniet id totam debitis repellat nam aliquam saepe laboriosam,
                    itaque tempora in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus a libero
                    minus. Hic voluptatum quidem, harum dolorum beatae nam provident inventore repellendus, nostrum
                    tempora exercitationem. Distinctio possimus voluptate eveniet placeat!
                </p>
            </div>

        </div>
        <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Leafs" class=" my-5 rounded w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
    </div>





    </div>
  )
}

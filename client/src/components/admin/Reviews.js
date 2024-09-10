const Reviews = () => {
    return (
      <>
       
  
        <div className=" ml-[18%] p-5">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-bold text-gray-700">Category</h2>
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
              <a href="" className="bg-blue-600 text-white p-3 rounded-lg">
                Add Category
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
                        <th className="px-4 py-3">Priority</th>
                        <th className="px-4 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">1</div>
                        </td>
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">animal Husbandry</p>
                            </div>
                          </div>
                        </td>
  
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">3</p>
                            </div>
                          </div>
                        </td>
  
                        <td className="border p-3 text-center">
                          <a
                            href=""
                            className="bg-blue-500 text-white p-2 mx-2 rounded-lg"
                          >
                            Edit
                          </a>
                          <button className="bg-red-500 text-white p-2 mx-2 rounded-lg">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  
            <div
              id="delete-popup"
              className="fixed hidden inset-0 flex items-center justify-center w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 font-bold text-lg">
                  Are you sure you want to delete this Product?
                </p>
                <div className="mt-4 flex justify-end">
                  <a
                    id="confirm-delete"
                    href=""
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Confirm
                  </a>
                  <button
                    onclick=""
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Reviews;
  
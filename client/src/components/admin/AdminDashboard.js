import Chart from "./Charts";
import PieChartt from "./PieChart";

    const AdminDashboard = ()=>{
        return (
            <div className="">
            <div className="flex items-center ml-[300px] ">

                <div className="w-full rounded overflow-hidden shadow-lg m-3 ">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Medicine</div>
                    <p className="text-gray-700 text-base">
                        
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    
                </div>
                </div>

                <div className="w-full rounded overflow-hidden shadow-lg m-3 ">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Medicine</div>
                    <p className="text-gray-700 text-base">
                        
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    
                </div>
                </div>

                <div className="w-full rounded overflow-hidden shadow-lg m-3 ">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Medicine</div>
                    <p className="text-gray-700 text-base">
                        
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    
                </div>
                </div>


                <div className="w-full rounded overflow-hidden shadow-lg m-3 ">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Medicine</div>
                    <p className="text-gray-700 text-base">
                        
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    
                </div>
                </div>
            </div>
            <div className="ml-[300px]">

                <Chart/>
              <PieChartt />
            </div>
            </div>
        )
    }

    export default AdminDashboard;  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/user/About";
import Home from "./components/user/Home";
import Login from "./components/user/auth/Login";
import Register from "./components/user/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddCategory from "./components/admin/AddCategory";
import Category from "./components/admin/Category";
import Chart from "./components/admin/Charts";
import Fertilizers from "./components/admin/Fertilizers";
import Medicines from "./components/admin/Medicines";
import Pesticides from "./components/admin/Pesticides";
import Reviews from "./components/admin/Reviews";
import Users from "./components/admin/Users";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/auth/Login";
import AdminPrivateRoute from "./components/admin/auth/Protected";
import UsersPrivateRoute from "./components/user/auth/Protected";
import Seed from "./components/admin/Seed";
import AddFertilizer from "./components/admin/AddFertilizer";
import AddMedicine from "./components/admin/AddMedicine";
import AddPestiside from "./components/admin/AddPestiside";
import AddSeed from "./components/admin/AddSeed";
import EditSeed from "./components/admin/EditSeed";
import EditFertilizer from "./components/admin/EditFertilizer";
import EditMedicine from "./components/admin/EditMedicine";
import EditPesticide from "./components/admin/EditPesticide";
import EditCategory from "./components/admin/EditCategory";
import Land from "./components/admin/Land";
import Profile from "./components/user/Profile";
import Service from "./components/user/Service";
import SearchResult from "./components/user/SearchResult";
import SeedForm from "./components/user/SeedForm";
import PesticideFom from "./components/user/PesticideFom";
import MedicineForm from "./components/user/MedicineForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <UsersPrivateRoute>
      <MainLayout />
      // </UsersPrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },

      // {
      //   path:"profile",
      //   element:<Profile/>
      // },
      // {
      //   path:"service",
      //   element:<Service/>
      // },
      // {
      //   path: "service/search/result/:keyword",
      //   element: <SearchResult />
      // },
      // {
      //   path:"service/searchseed/:id",
      //   element:<SeedForm/>
      // },

      // {
      //   path:"service/searchpesticide/:id",
      //   element:<PesticideFom/>
      // },
      // {
      //   path:"service/searchmedicine/:id",
      //   element:<MedicineForm/>
      // }


    ],
  },



  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chart",
    element: <Chart />,
  }

,{
  path:"/admin",
  element:(
    <AdminPrivateRoute>
      <AdminLayout/>

    </AdminPrivateRoute>
  ),
  childre:[
    {
      index:true,
      element:<AdminDashboard/>
    },
    
  ]

},
{
  path:"/admin/login",
  element:<AdminLogin/>

}


]);

function App() {
  return (
    <>
      <div>
        <ToastContainer position="top-right" />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

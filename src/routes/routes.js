import Blog from "../pages/Blog/Blog";
import CategoryBooks from "../pages/CategoryBooks/CategoryBooks";
import AllBuyers from "../pages/Dashboard/Admin/AllBuyers";
import Allsellers from "../pages/Dashboard/Admin/Allsellers";
import ReportedItems from "../pages/Dashboard/Admin/ReportedItems";
import Myorders from "../pages/Dashboard/Buyer/Myorders";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/Seller/AddProduct";
import MyProuducts from "../pages/Dashboard/Seller/MyProuducts";
import Home from "../pages/Home/Home";
import DashboardLayout from "../pages/layouts/DashboardLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../pages/layouts/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/categories/:categoryId',
                element: <CategoryBooks></CategoryBooks>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Myorders></Myorders>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProuducts></MyProuducts>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allseller',
                element: <Allsellers></Allsellers>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            },

        ]
    }

])
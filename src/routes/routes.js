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
import ErrorElement from "../pages/NotFound/ErrorElement";
import NotFound from "../pages/NotFound/NotFound";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../pages/layouts/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
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
                element: <PrivateRoute><CategoryBooks></CategoryBooks></PrivateRoute>,
                errorElement: <ErrorElement></ErrorElement>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.categoryId}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <Myorders></Myorders>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProuducts></MyProuducts></SellerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><Allsellers></Allsellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },

        ]
    },
    { path: '*', element: <NotFound></NotFound> }

])
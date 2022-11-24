import Blog from "../pages/Blog/Blog";
import CategoryBooks from "../pages/CategoryBooks/CategoryBooks";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
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
    }

])
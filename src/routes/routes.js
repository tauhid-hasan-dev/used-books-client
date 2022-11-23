const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../pages/layouts/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }
])
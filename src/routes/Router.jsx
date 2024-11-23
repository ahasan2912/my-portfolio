import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error Pages</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/project",
                element: <div>Projects</div>
            },
            {
                path: "/contact",
                element: <div>Contact Info</div>
            }
        ]
    }
])

export default router;
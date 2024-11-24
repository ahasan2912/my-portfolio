import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import About from "../pages/About";
import ErrorPages from "../pages/ErrorPages";
import Project from "../pages/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/project",
                element: <Project></Project>,
                loader: ()=> fetch("/projectdata.json")
            },
            {
                path: "/blog",
                element: <div>blog</div>
            }
        ]
    }
])

export default router;
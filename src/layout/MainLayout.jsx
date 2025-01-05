import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-[52px]">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-165px)]">
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;
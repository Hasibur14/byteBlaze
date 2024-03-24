import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


const MainLayout = () => {
    return (
        <div>
            <div className="h-20">
                <Nav></Nav>
            </div >
            <div className="min-h-[calc(100vh-134px)]">
            <Outlet ></Outlet>
            </div>
         
            <div >
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
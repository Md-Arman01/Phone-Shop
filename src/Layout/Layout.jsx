import { Outlet, useLocation } from "react-router-dom";
import Navber from "./Navber";

const Layout = () => {

    const locationDetails = useLocation()
    console.log(locationDetails)
    

    {
        if(locationDetails.pathname === '/'){
            document.title = `Phone - home`
        }else{
            document.title = `Phone ${locationDetails.pathname.replace('/', '- ')}`
        }
        if(locationDetails.state){
            document.title = `${locationDetails.state}`
        }
    }




    return (
        <div>
            <Navber></Navber>
            <div className="container mx-auto my-5">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;
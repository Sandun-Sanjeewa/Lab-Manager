import Navbar from "../../containers/Navbar.jsx";

import UserLayout from "../../layouts/UserLayout.jsx";
import UserLogOut from "../auth/UserLogOut.jsx";

const HomePage = () => {
    return (
        <>
            <div className="bg-green-100 h-dvh">
                <Navbar />
                <h1>This is the Home page</h1>
                <UserLogOut />
            </div>
           
            <UserLayout/>


        </>

    );
};
export default HomePage
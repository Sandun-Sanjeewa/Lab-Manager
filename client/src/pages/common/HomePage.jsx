import Navbar from "../../containers/Navbar.jsx";
import UserLogOut from "../auth/UserLogOut.jsx";

const HomePage = () => {
    return (
        <>
            <div className="bg-green-100 dark:bg-gray-800 h-dvh">
                <Navbar />
                <h1>This is the Home page</h1>
                <UserLogOut />
            </div>
        </>

    );
};
export default HomePage
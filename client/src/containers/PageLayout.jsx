import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const PageLayout = ({ pagecontent }) => {
     const [token, setToken] = useState(localStorage.getItem("token"));
    const isLogin = !!token;
    
    return (
        <>
            <div className="flex flex-col">
                <div className="">
                    <Navbar className={"bg-gray-50"}/>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Sidebar/>
                    <main className="  w-full  md:min-h-screen  pl-[40px] mt-[40px] md:pl-[66px] md:pr-[10px] md:mt-[50px] md:pt-2 ">
                        {pagecontent}
                        {/* <div className=" bg-green-400 h-[400px] "><h1 className="text-gray-100">first part</h1></div>
                        <div className=" bg-blue-400 h-[400px] "></div>
                        <div className=" bg-green-400 h-[400px]"></div>
                        <div className=" bg-blue-400 h-[400px] "></div> */}
                    </main>
                </div>
            </div>
        </>
    );
};
export default PageLayout
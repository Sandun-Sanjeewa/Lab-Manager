import departmentimg from "../../assets/departmentimg.png";
import Navbar from "../../containers/Navbar";

const HomePage = () => {
    return (
        <>

            <div className="flex flex-col min-h-screen w-full bg-gray-100  ">

                <Navbar className="fixed top-0 left-0 w-full bg-gray-100 md:shadow-md z-20 py-2" />
                <div className="pt-16 px-2 ">
                    <div className="relative h-[90vh]  overflow-hidden rounded-lg  ">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${departmentimg})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                        <div className="relative z-10 flex flex-col mt-16 ml-4 sm:mt-8 sm:ml-8 md:mt-16 md:ml-16">
                            <h1 className="text-gray-50 text-2xl  md:text-3xl lg:text-5xl">Department of Computer Science</h1>
                            <h3 className="text-gray-100 mt-2  text-md md:text-xl lg:text-3xl">University Of Ruhuna</h3>
                        </div>
                    </div>
                    <div className=" bg-gray-100 h-[400px]"></div>
                    <div className=" bg-gray-100 h-[400px]"></div>
                    <div className=" bg-gray-100 h-[400px] "></div>

                </div>



            </div>
        </>

    );
};
export default HomePage;
import departmentimg from "../../assets/departmentimg.png";
import Navbar from "../../containers/Navbar";

const HomePage = () => {
    return (
        <>

            <div className="flex flex-col min-h-screen w-full bg-gray-100  ">

                <Navbar className="fixed top-0 left-0 w-full bg-gray-100 md:shadow-md z-20" />
                <div className="pt-16 px-2 ">
                    <div className="relative h-[90vh]  overflow-hidden rounded-lg  ">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${departmentimg})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                        <div className="relative z-10 flex items-start justify-start ml-2 mt-6 md:items-start md:justify-start md:ml-6 md:mt-32 h-full text-white">
                            <h1 className="text-xl sm:text-2xl md:text-5xl font-extrabold font-mono">Department of Computer Science</h1>
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
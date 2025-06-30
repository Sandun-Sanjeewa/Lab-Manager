import Navbar from "../containers/Navbar.jsx";

const UserLayout = () => {
    return (
        <>
        
            <main className="bg-gray-800">
                <Navbar className="text-red"/>
                <div className="max-w-5xl mx-auto p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white h-32">item1</div>
                        <div className="bg-white h-32">item2</div>
                        <div className="bg-white h-32">item3</div>

                    </div>
                </div>
                <div>
                    <div className="flex flex-row gap-4 p-6">
                        <div className="bg-white basis-1/4 ">item1</div>
                        <div className="bg-white basis-1/4">item2</div>
                        <div className="bg-white basis-1/4">item3</div>
                        <div className="bg-white basis-1/4">item4</div>
                    </div>
                </div>
            </main>
        </>
    );

};
export default UserLayout
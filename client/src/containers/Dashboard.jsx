const Dashboard = ({maincontent}) => {
    return (
        <>
            <div className="flex md:flex-row flex-col bg:black">
                <aside className=" fixed z-10 bg-gray-900 w-full  md:w-[50px] h-[50px] md:min-h-screen  p-2 ">

                </aside>
                <main className=" bg-gray-200 w-full  md:min-h-screen  p-2 pt-[50px] md:p-4 md:pl-[60px] ">
                    {maincontent}
                </main>
            </div>
        </>
    );
};
export default Dashboard;
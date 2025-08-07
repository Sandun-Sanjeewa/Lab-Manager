

const LabDashboard = ({labs}) => {
    return (
        <>
            <div className="flex min-h-screen">
                <aside className="bg-gray-900 text-gray-100  w-12 min-h-screen">
                 
                </aside>

                <main className="flex-1 bg-gray-100 p-6">
                    <h1 className="text-2xl font-bold mb-4">Lab Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white rounded shadow p-4">{labs.length}</div>
                        <div className="bg-white rounded shadow p-4">Lab 2</div>
                        <div className="bg-white rounded shadow p-4">Lab 3</div>
                    </div>
                </main>
            </div>

        </>
    );
};
export default LabDashboard 
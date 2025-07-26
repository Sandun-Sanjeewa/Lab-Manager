const LabDashboardStats = ({totalLabs }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Total Labs</h4>
                    <p className="text-3xl font-bold">{totalLabs}</p>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Upcoming Sessions</h4>
                    <p className="text-3xl font-bold">{upcomingSessions}</p>
                </div>
            </div>
        </>
    );
};
export default LabDashboardStats
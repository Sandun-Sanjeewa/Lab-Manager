const EntityCard = ({ entityIcon,entityName,EntityCardclassName}) => {
    
    return (
        <>
            <div className="flex flex-col ">
                <div className={`flex  md:h-24 md:w-24 rounded-lg justify-center items-center bg-white/10 backdrop-blur-xs ${EntityCardclassName}`}>
                    {entityIcon}
                </div>
                <div className="flex text-gray-600 justify-center items-center text-sm">
                    {entityName}
                </div>
            </div>
        </>
    );
};
export default EntityCard
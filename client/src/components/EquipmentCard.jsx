const EquipmentCard = ({ EquipmentsName, equipmentQuantity, equipmentName, equipmentsvgicon }) => {
    return (
        <div className="group">
            <div className="flex  flex-row bg-gray-100 h-auto min-h-[80px] md:h-[100px] lg:h-[100px]  shadow-md overflow-hidden  group-hover:bg-gray-900 group-hover:text-gray-100 transition-all duration-200 ease-in-out">
                <div className="flex flex-col w-full">
                    <div className=" flex justify-center items-end flex-1  basis-2/3  ">
                        {equipmentsvgicon}
                    </div>
                    <div className=" flex justify-center items-center flex-1 p-2 text-sm sm:text-base   basis-1/3 text-gray-900 group-hover:text-gray-100">
                        {equipmentName}
                    </div>
                </div>
                <div className="flex items-center justify-center w-full   p-4">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 group-hover:text-gray-100">
                        {equipmentQuantity}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;

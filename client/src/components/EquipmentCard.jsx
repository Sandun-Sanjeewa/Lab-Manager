const EquipmentCard = ({ EquipmetsClass, EquipmentsQuantity, EquipmentsName, equipmentQuantity, equipmentName, equipmentsvgicon }) => {
    return (
        <>
            <div className={`flex flex-col  items-center bg-white text-gray-800 md:h-[100px] sm:h-[75px] h-[60px]  hover:bg-gray-900 hover:text-gray-100  ${EquipmetsClass}`}>
                <div className="w-full md:mt-4 ">
                    <div className={`text-md  md:pl-4 pl-2  ${EquipmentsName}`}>
                        {equipmentName}
                    </div>
                </div>
                <div className="flex items-center justify-evenly w-full h-full pb-4">
                    <div>
                        {equipmentsvgicon}
                    </div>
                    <div className={`text-md sm:text-xl md:text-4xl lg:text-5xl hover:text-gray-100 ${EquipmentsQuantity}`}>

                        {equipmentQuantity}
                    </div>
                </div>


            </div>
        </>
    );
};
export default EquipmentCard;
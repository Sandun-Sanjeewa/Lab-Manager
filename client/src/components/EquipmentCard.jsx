const EquipmentCard = ({EquipmetsClass,EquipmentsQuantity,EquipmentsName,equipmentQuantity,equipmentName}) => {
    return (
        <>
            <div className={`flex flex-col ${EquipmetsClass}`}>
                <div className={`${EquipmentsQuantity}`}>
                    {equipmentQuantity}
                </div>
                <div className={`${EquipmentsName}`}>
                    {equipmentName}
                </div>
            </div>
        </>
    );
};
export default EquipmentCard;
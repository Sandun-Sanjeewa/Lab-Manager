const EquipmentTable = ({ data, columns, loading, title, onEdit, onDelete }) => {
    if (loading) {
        return <p>Loading {title} ...</p>
    }
    return (
        <>
            <div className="w-full h-full">
                <div className="ml-4 mt-2">
                    <h2 className="text-xl font-semibold">
                        {title}
                    </h2>
                </div>
                <div>
                    <table className="min-w-full table-auto border border-gray-300">
                        <thead>
                            <tr>
                                {(onEdit || onDelete) && <th className="p-2 border">Actions</th>}
                                {columns.map((col) => (
                                    <th key={col.key} className="p-2 border">{col.label}</th>
                                ))}

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item._id} className="align-middle">

                                    {(onEdit || onDelete) && (
                                        <td className="p-2 border flex gap-2">
                                            {onEdit && (
                                                <button
                                                    onClick={() => onEdit(item)}
                                                    className="px-2 py-1 bg-blue-500 text-white rounded"
                                                >
                                                    Edit
                                                </button>
                                            )}
                                            {onDelete && (
                                                <button
                                                    onClick={() => onDelete(item)}
                                                    className="px-2 py-1 bg-red-500 text-white rounded"
                                                >
                                                    Delete
                                                </button>
                                            )}
                                        </td>
                                    )}
                                    {columns.map((col) => (
                                        <td key={col.key} className="p-2 border">
                                            {typeof col.render === "function"
                                                ? col.render(item)
                                                : item[col.key]
                                            }
                                        </td>
                                    ))}

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default EquipmentTable;
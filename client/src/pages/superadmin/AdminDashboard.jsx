import { useEffect, useState } from "react";
import { deleteUser, updateUserrole } from "../../services/userServices.js";
import { toast } from "react-toastify";
import Navbar from "../../containers/Navbar.jsx";
import { useUsers } from "../../context/UserContext.jsx";



const DashboardPage = () => {
    const { users, setUsers, fetchUsers,  loading: usersLoading  } = useUsers();

    
    const [editingUser, setEditingUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState("");
    const [userToDelete, setUserToDelete] = useState(null);
       const [tokenReady, setTokenReady] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setTokenReady(true);
        } else {
            toast.error("You are not logged in. ");
        }
    }, []);

    useEffect(() => {
        if (tokenReady) {
            fetchUsers();
        }
    }, [tokenReady]);
  

    const handleEditClick = (user) => {
        if (user.role === "superadmin") {
            toast.warn("Cannot edit superadmin role.");
            return;
        }
        setEditingUser(user);
        setSelectedRole(user.role);
    };


    const handleSave = async () => {
        try {
            await updateUserrole(editingUser._id, selectedRole);
            toast.success("Role updated successfully!");
            setUsers((prevUsers) =>
                prevUsers.map((u) =>
                    u._id === editingUser._id ? { ...u, role: selectedRole } : u
                )
            );
            setEditingUser(null);
        } catch (error) {
            console.error(error);
            toast.error("Failed to update role");
        }
    };

    const handleCancel = () => {
        setEditingUser(null);
    };

    const deleteUserHandle = async () => {
        if (!userToDelete) return;

        if (userToDelete.role === "superadmin") {
            toast.warn("Superadmin cannot be deleted.");
            return;
        }

        try {
            await deleteUser(userToDelete._id);
            toast.success("User deleted successfully!");
            setUsers((prev) =>
                prev.filter((u) => u._id !== userToDelete._id)
            );
            setUserToDelete(null);
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete user");
        }
    };

    return (
        <div className="w-full min-h-screen bg-black text-gray-100">
            <Navbar/>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Manage User Role</h2>

                {usersLoading ? (
                    <p>Loading users...</p>
                ) : users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <table className="min-w-full table-auto border border-gray-300">
                        <thead>
                            <tr>
                                <th className="p-2 border">Name</th>
                                <th className="p-2 border">Email</th>
                                <th className="p-2 border">Current Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="text-center align-middle">
                                    <td className="p-2 border">{user.name}</td>
                                    <td className="p-2 border">{user.email}</td>
                                    <td className="p-2 border">
                                        <div className="flex flex-row justify-between items-center gap-2">
                                            <span className="w-20">{user.role}</span>

                                            <div className="flex gap-2">
                                                {user.role !== "superadmin" && (
                                                    <button
                                                        className="bg-blue-500 text-white px-2 py-1 rounded"
                                                        onClick={() => handleEditClick(user)}
                                                    >
                                                        Edit
                                                    </button>
                                                )}
                                                <button
                                                    className="bg-red-500 text-white px-2 py-1 rounded disabled:opacity-50"
                                                    onClick={() => setUserToDelete(user)}
                                                    disabled={user.role === "superadmin"}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {editingUser && (
                    <div className="fixed inset-0 flex items-center justify-center  z-50">
                        <div className="bg-white text-black p-6 rounded shadow-lg w-96">
                            <h3 className="text-lg font-bold mb-4">
                                Edit Role for {editingUser.name}
                            </h3>
                            <select
                                className="w-full p-2 border mb-4"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                            >
                                <option value="user">User</option>
                                <option value="lecturer">Lecturer</option>
                                <option value="technician">Technician</option>
                                <option value="assistant">Assistant</option>
                                <option value="admin">Admin</option>
                                <option value="superadmin">SuperAdmin</option>
                                
                            </select>
                            <div className="flex justify-end space-x-2">
                                <button
                                    className="bg-gray-300 px-4 py-2 rounded"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {userToDelete && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white text-black p-6 rounded shadow-lg w-96">
                            <h3 className="text-lg font-bold mb-4">
                                Are you sure you want to delete{" "}
                                <span className="text-red-600">{userToDelete.name}</span>?
                            </h3>
                            <div className="flex justify-end space-x-2">
                                <button
                                    className="bg-gray-300 px-4 py-2 rounded"
                                    onClick={() => setUserToDelete(null)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={deleteUserHandle}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default DashboardPage;

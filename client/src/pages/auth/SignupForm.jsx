import { useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/userServices";

const SignupForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    general: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData(prev => ({ ...prev, [name]: value }));
    setError(prev => ({ ...prev, [name]: "", general: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!userFormData.name.trim()) newErrors.name = "Name is required";
    if (!userFormData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(userFormData.email)) newErrors.email = "Email format is invalid";
    if (!userFormData.password.trim()) newErrors.password = "Password is required";
    else if (userFormData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(prev => ({ ...prev, ...validationErrors }));
      return;
    }

    try {
      const response = await signupUser(userFormData);
      localStorage.setItem("token", response.data.token);
      const user = jwtDecode(response.data.token);
      user.role === "superadmin" ? navigate("/dashboard") : navigate("/home");
      console.log("user registered", response.data);
      setUserFormData({ name: "", email: "", password: "", role: "user" });
      setError({ name: "", email: "", password: "", general: "" });
      onClose();
    } catch (err) {
      setError(prev => ({
        ...prev,
        general: err.response?.data?.error || "Signup failed"
      }));
    }
  };

  return (
    <div className="text-gray-800">
      <h3 className="text-gray-400 mb-2">Create new account</h3>
      {error.general && <p className="text-red-500 text-sm mb-3">{error.general}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-500">User Name</label>
          <input
            type="text"
            name="name"
            value={userFormData.name}
            onChange={handleChange}
            autoComplete="off"
            className={`border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.name ? "border-red-400" : "border-gray-200"}`}
          />
          {error.name && <p className="text-red-400 text-xs">{error.name}</p>}
        </div>

        <div className="mb-4">
          <label className="text-gray-500">Email</label>
          <input
            type="email"
            name="email"
            value={userFormData.email}
            onChange={handleChange}
            autoComplete="off"
            className={`border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.email ? "border-red-400" : "border-gray-200"}`}
          />
          {error.email && <p className="text-red-400 text-xs">{error.email}</p>}
        </div>

        <div className="mb-4">
          <label className="text-gray-500">Password</label>
          <input
            type="password"
            name="password"
            value={userFormData.password}
            onChange={handleChange}
            autoComplete="off"
            className={`border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.password ? "border-red-400" : "border-gray-200"}`}
          />
          {error.password && <p className="text-red-400 text-xs">{error.password}</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-800 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-blue-700 hover:text-black"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userServices";

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "", general: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!userFormData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(userFormData.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!userFormData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (userFormData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError((prev) => ({ ...prev, ...validationErrors }));
      return;
    }
    try {
      const response = await loginUser(userFormData);
      localStorage.setItem("token", response.data.token);
      const user = jwtDecode(response.data.token);
      user.role === "superadmin" ? navigate("/dashboard") : navigate("/home");
      setUserFormData({ email: "", password: "" });
      setError({ email: "", password: "", general: "" });
      onClose();
    } catch (err) {
      setError((prev) => ({ ...prev, general: err.response?.data?.error || "Login failed" }));
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        {error.general && <p className="text-red-500 text-sm mb-2">{error.general}</p>}

        <div className="mb-4">
          <label className="text-gray-500">Email</label>
          <input
            className={`text-gray-50 border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.email ? "border-red-400" : "border-gray-200"}`}
            type="email"
            name="email"
            value={userFormData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {error.email && <p className="text-red-400 text-xs">{error.email}</p>}
        </div>

        <div className="mb-4">
          <label className="text-gray-500">Password</label>
          <input
            className={`text-gray-50 border-0 border-b-2 focus:border-blue-500 outline-none w-full ${error.password ? "border-red-400" : "border-gray-200"}`}
            type="password"
            name="password"
            value={userFormData.password}
            onChange={handleChange}
            autoComplete="off"
          />
          {error.password && <p className="text-red-400 text-xs">{error.password}</p>}
        </div>

        <div className="flex justify-end">
          <button
            className="w-auto px-4 max-w-[180px] my-4 h-10 text-gray-100 transition-all duration-100 ease-in-out bg-transparent border-2 border-gray-500 rounded hover:border-blue-700 hover:text-blue-700"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

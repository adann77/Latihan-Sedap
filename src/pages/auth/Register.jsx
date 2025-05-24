import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (dataForm.password !== dataForm.confirmPassword) {
      setError("Password tidak cocok.");
      return;
    }

    // Simulasi registrasi berhasil
    alert("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Create Your Account ✨
      </h2>

      {error && (
        <div className="bg-red-100 p-3 rounded text-red-600 mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={dataForm.username}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border rounded-lg"
            placeholder="Contoh: johndoe"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border rounded-lg"
            placeholder="********"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={dataForm.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border rounded-lg"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Register
        </button>
      </form>

      <div className="text-sm text-center mt-4 text-blue-600">
        <button onClick={() => navigate("/login")} className="hover:underline">
          Sudah punya akun? Login
        </button>
      </div>
    </div>
  );
}

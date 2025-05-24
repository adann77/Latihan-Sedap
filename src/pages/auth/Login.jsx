import { ImSpinner2 } from "react-icons/im"; 
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios.post("https://dummyjson.com/auth/login", {
      username: dataForm.username,
      password: dataForm.password,
    })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      } else {
        setError("Login gagal, cek kembali username dan password.");
      }
    })
    .catch((err) => {
      if (err.response) {
        setError(err.response.data.message || "Terjadi kesalahan.");
      } else {
        setError("Gagal koneksi ke server.");
      }
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>
  
      {error && (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
          <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
          {error}
        </div>
      )}
  
      {loading && (
        <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
          <ImSpinner2 className="me-2 animate-spin" />
          Mohon Tunggu...
        </div>
      )}
  
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Contoh: kminchelle"
            value={dataForm.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded bg-gray-50"
            required
          />
        </div>
  
        <div className="mb-5">
          <label className="block text-sm mb-1 text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded bg-gray-50"
            required
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Login
        </button>
      </form>
  
      <div className="flex justify-between mt-4 text-sm text-blue-600">
        <button onClick={() => navigate("/forgot")} className="hover:underline">
          Lupa Password?
        </button>
        <button onClick={() => navigate("/register")} className="hover:underline">
          Belum punya akun? Daftar
        </button>
      </div>
    </div>
  );
}
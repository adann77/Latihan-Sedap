import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUsers() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Added:", form);
    alert("User berhasil ditambahkan (dummy action)");
    navigate("/users"); // Kembali ke halaman users
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-hijau">Tambah User Baru</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Nama Depan"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nama Belakang"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Nomor Telepon"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Alamat"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Kota"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-hijau text-white rounded hover:bg-green-700 transition"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

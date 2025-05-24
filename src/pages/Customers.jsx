import { useState } from "react";
import customers from "../data/customersdata.json";
import { Link } from "react-router-dom";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-hijau">Daftar Customer</h1>
                <div className="flex gap-3">
                    <Link
                        to="/customers/add"
                        className="px-4 py-2 bg-hijau text-white rounded hover:bg-green-700 transition"
                    >
                        + Tambah Customer
                    </Link>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="px-4 py-2 border border-hijau text-hijau rounded hover:bg-green-50 transition"
                    >
                        {showForm ? "Tutup Form" : "Tampilkan Form"}
                    </button>
                </div>
            </div>

            {showForm && (
                <div className="mb-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">Form Input Sementara</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            placeholder="Customer ID"
                            className="border border-gray-300 rounded px-3 py-2"
                        />
                        <input
                            placeholder="Nama Lengkap"
                            className="border border-gray-300 rounded px-3 py-2"
                        />
                        <input
                            placeholder="Email"
                            className="border border-gray-300 rounded px-3 py-2"
                        />
                        <input
                            placeholder="Telepon"
                            className="border border-gray-300 rounded px-3 py-2"
                        />
                        <input
                            placeholder="Gold / Silver / Bronze"
                            className="md:col-span-2 border border-gray-300 rounded px-3 py-2"
                        />
                    </form>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-green-100 text-hijau">
                        <tr>
                            <th className="text-left py-3 px-4">ID</th>
                            <th className="text-left py-3 px-4">Nama</th>
                            <th className="text-left py-3 px-4">Email</th>
                            <th className="text-left py-3 px-4">Telepon</th>
                            <th className="text-left py-3 px-4">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((cust, index) => (
                            <tr key={index} className="hover:bg-green-50 border-b last:border-none">
                                <td className="py-2 px-4">{cust["Customer ID"]}</td>
                                <td className="py-2 px-4">{cust["Customer Name"]}</td>
                                <td className="py-2 px-4">{cust["Email"]}</td>
                                <td className="py-2 px-4">{cust["Phone"]}</td>
                                <td
                                    className={`py-2 px-4 font-semibold ${
                                        cust["Loyalty"] === "Gold"
                                            ? "text-yellow-600"
                                            : cust["Loyalty"] === "Silver"
                                            ? "text-gray-500"
                                            : "text-orange-500"
                                    }`}
                                >
                                    {cust["Loyalty"]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

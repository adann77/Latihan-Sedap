export default function AddCustomers() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-hijau">Tambah Customer Baru</h2>

            <form className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Customer ID (ex: CUST-001)"
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Nama Lengkap"
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                        type="email"
                        placeholder="Email (ex: user@email.com)"
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                        type="tel"
                        placeholder="No. Telepon (08xxxxxxxxxx)"
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                    <select className="md:col-span-2 border border-gray-300 rounded px-3 py-2 text-gray-600">
                        <option value="">Pilih Status Loyalty</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Bronze">Bronze</option>
                    </select>
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        className="px-6 py-2 bg-hijau text-white rounded hover:bg-green-700 transition"
                    >
                        Simpan Customer
                    </button>
                </div>
            </form>
        </div>
    );
}

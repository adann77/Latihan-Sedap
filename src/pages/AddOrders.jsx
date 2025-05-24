export default function AddOrders() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-hijau">Tambah Order Baru</h2>

            <form className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Order ID (ex: ORD-001)"
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Nama Customer"
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                    <select className="border border-gray-300 rounded px-3 py-2 text-gray-600">
                        <option value="">Pilih Status Order</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Total Harga (Rp)"
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                        type="date"
                        className="md:col-span-2 border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        className="px-6 py-2 bg-hijau text-white rounded hover:bg-green-700 transition"
                    >
                        Simpan Order
                    </button>
                </div>
            </form>
        </div>
    );
}

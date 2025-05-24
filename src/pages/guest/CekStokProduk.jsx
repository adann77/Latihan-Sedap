import React, { useState } from "react";
import dataProduk from "../../data/CekProducts.json";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const CekStokProduk = () => {
  const [kode, setKode] = useState("");
  const [pesan, setPesan] = useState(null);

  const handleCek = (e) => {
    e.preventDefault();

    if (kode.trim().length < 4) {
      setPesan({ status: "error", text: "Kode produk minimal 4 karakter" });
      return;
    }

    const produk = dataProduk.find(
      (item) => item.kode_produk === kode.trim().toUpperCase()
    );

    if (!produk) {
      setPesan({ status: "notfound" });
    } else if (produk.stok > 0) {
      setPesan({ status: "available", produk });
    } else {
      setPesan({ status: "habis", produk });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md my-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Cek Ketersediaan Produk
      </h2>

      {/* Form Input */}
      <form onSubmit={handleCek} className="flex flex-col space-y-4">
        <input
          type="text"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Masukkan Kode Produk"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
        >
          Cek Stok
        </button>
      </form>

      {/* Produk tersedia */}
      {pesan?.status === "available" && (
        <div className="mt-6 bg-green-50 border border-green-400 p-4 rounded-lg flex items-center gap-4">
          <img
            src="/img/keranjang.png"
            alt="Produk tersedia"
            className="w-14 h-14 object-contain"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-green-700 font-semibold flex-wrap">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span>
                Produk <strong>{pesan.produk.nama_produk}</strong> tersedia
                dengan harga <strong>Rp{pesan.produk.harga}</strong>
              </span>
            </div>
            <p className="text-sm text-gray-700 mt-1">
              Stok tersedia: {pesan.produk.stok}
            </p>
          </div>
        </div>
      )}

      {/* Produk habis */}
      {pesan?.status === "habis" && (
        <div className="mt-6 bg-yellow-50 border border-yellow-400 p-4 rounded-lg flex items-start gap-3">
          <AlertTriangle className="text-yellow-600 mt-1" />
          <div>
            <p className="font-bold text-yellow-700">
              Produk <strong>{pesan.produk.nama_produk}</strong> saat ini
              sedang habis.
            </p>
            <p className="italic text-sm text-gray-600">Out of Stock</p>
          </div>
        </div>
      )}

      {/* Produk tidak ditemukan */}
      {pesan?.status === "notfound" && (
        <div className="mt-6 bg-red-50 border border-red-400 p-4 rounded-lg flex items-start gap-3">
          <XCircle className="text-red-600 mt-1" />
          <div>
            <p className="font-bold text-red-700">
              ❌ Kode produk tidak ditemukan.
            </p>
          </div>
        </div>
      )}

      {/* Error validasi input */}
      {pesan?.status === "error" && (
        <div className="mt-4 text-sm text-red-600 font-medium">
          ⚠️ {pesan.text}
        </div>
      )}
    </div>
  );
};

export default CekStokProduk;

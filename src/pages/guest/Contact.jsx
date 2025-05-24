import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fff8f0] to-[#ffe8e8] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-orange-500">🍽️</div>
          <h1 className="text-xl font-bold text-black">SEDAP</h1>
        </div>
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <Link to="/guest" className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            About Us
          </Link>
          <Link to="/restaurants" className="hover:text-orange-500">
            Restaurants
          </Link>
          <Link to="/pages" className="hover:text-orange-500">
            Pages
          </Link>
          <Link to="/contact" className="hover:text-orange-500">
            Contacts
          </Link>
        </nav>

        <div className="flex space-x-4">
          <a
            href="/login"
            className="bg-white border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-50 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow transition"
          >
            Register
          </a>
        </div>
      </header>

      {/* Konten */}
      <main className="px-8 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/guest" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="text-black">Kontak</span>
        </nav>

        <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
        <p className="text-gray-600 text-lg mb-10">
          Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda kapan
          saja.
        </p>

        {/* Info Kontak + Gambar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          {/* Kiri */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white hover:bg-black hover:text-white transition-all duration-300 shadow rounded-xl p-6">
              <p className="font-semibold text-lg">Jl. Merdeka No. 123</p>
              <p>Jakarta Pusat, DKI Jakarta 10110</p>
              <p>Indonesia</p>
            </div>
            <div className="bg-white hover:bg-black hover:text-white transition-all duration-300 shadow rounded-xl p-6">
              <p className="font-semibold text-lg">supportsedap@mail.id</p>
              <p>Untuk pertanyaan umum</p>
              <br />
              <p className="font-semibold text-lg">cs@sedap.com</p>
              <p>Layanan pelanggan</p>
            </div>
            <div className="bg-white hover:bg-black hover:text-white transition-all duration-300 shadow rounded-xl p-6">
              <p className="font-semibold text-lg">+62 812 3456 7890</p>
              <p>Senin - Jumat, 09.00 - 18.00</p>
              <br />
              <p className="font-semibold text-lg">+62 811 2222 3333</p>
              <p>Darurat (24 Jam)</p>
            </div>
          </div>

          {/* Kanan */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full max-w-md">
              <img
                src="/img/kontak.jpeg"
                alt="Kontak Kami"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Form Kontak + Google Map */}
        <div className="bg-white p-10 rounded-3xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h3>
            <p className="text-gray-600 mb-6">
              Kami siap membantu Anda! Silakan isi formulir di bawah ini untuk
              menghubungi tim Sedap.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                placeholder="Tulis pesan Anda"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg font-semibold transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.606759443563!2d106.82715361518672!3d-6.175394495528691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e0cfd29f29%3A0x501e8f1fc28e8b0!2sJakarta!5e0!3m2!1sen!2sid!4v1716118809377!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Jakarta"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;

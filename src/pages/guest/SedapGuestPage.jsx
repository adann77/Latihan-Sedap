import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import TopProducts from "./TopProducts";
import AboutSection from "./AboutSection";
import CekStokProduk from "./CekStokProduk";

const SedapGuestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fff8f0] to-[#ffe8e8] font-sans">
    {/* Header */}
    <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-[#FFA800]">🍽️</div>
        <h1 className="text-xl font-bold">
          <span className="text-gray-900">SEDA</span>
          <span className="text-[#FFA800]">P.</span>
        </h1>
      </div>

        {/* Menu Navigasi */}
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

        {/* Tombol Login/Register */}
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

      {/* Hero Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
            Nikmati Makanan Terbaik <br /> Tanpa Antri, Tanpa Repot
          </h2>
          <p className="text-gray-600 text-lg">
            Pesan makanan favorit Anda dari restoran terbaik dengan cepat dan
            mudah langsung dari genggaman Anda.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <select className="px-4 py-3 rounded-lg border text-gray-600 shadow-sm w-full md:w-auto">
              <option>Pilih Menu</option>
              <option>Ayam Geprek</option>
              <option>Ayam Bakar</option>
              <option>Nasi Goreng Spesial</option>
              <option>Bakso Urat</option>
            </select>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md w-full md:w-auto">
              PESAN SEKARANG
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center">
          <div className="relative z-10">
            <img
              src="/img/makanan2.jpg"
              alt="Food Delivery"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3 z-20 flex items-center space-x-3">
            <img
              src="/img/makanan2.jpg"
              alt="Restaurant"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <p className="text-xs text-gray-500">Pilihan Makanan</p>
              <p className="font-bold text-gray-800">Restoran Sedap</p>
            </div>
          </div>
        </div>
      </main>

      {/* Sections Tambahan */}
      <AboutSection />
      <TopProducts />
      <Testimonial />
      <CekStokProduk />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SedapGuestPage;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const AboutUs = () => {
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
          <a href="/login" className="bg-white border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-50 transition">
            Login
          </a>
          <a href="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow transition">
           Register
          </a>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 py-20">
        <div className="md:w-1/2 space-y-4">
          <nav className="text-sm text-gray-500 mb-2">
            <Link to="/guest" className="hover:underline">Home</Link> / <span className="text-black"> About Us</span>
          </nav>
          <h2 className="text-4xl font-bold text-gray-800">
            Nikmati Hidangan Lezat <br /> Bersama <span className="text-orange-500">SEDAP</span>
          </h2>
          <p className="text-gray-600 text-lg">
            SEDAP hadir untuk menghadirkan pengalaman kuliner terbaik ke meja makan Anda. Kami bekerja sama dengan restoran pilihan untuk menyajikan makanan favorit Anda tanpa repot.
          </p>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="transform rotate-3 rounded-3xl overflow-hidden shadow-xl w-full max-w-md">
            <img src="/img/makanan.jpg" alt="Tentang Kami" className="w-full h-full object-cover" />
          </div>
        </div>
      </main>

      {/* Misi */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center md:space-x-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src="/img/misi.png" alt="Misi Kami" className="w-full max-w-md mx-auto" />
          </div>

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
              Misi Kami: Menghemat Waktu Anda
            </h2>
            <p className="text-gray-600 text-lg">
              Kami percaya bahwa waktu Anda sangat berharga. Dengan SEDAP, Anda tidak perlu keluar rumah untuk menikmati hidangan favorit dari berbagai restoran pilihan.
            </p>
            <p className="text-gray-600 text-lg">
              Cukup pesan dari aplikasi atau website kami, dan biarkan kami mengantarkan rasa nikmat langsung ke pintu Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Fitur Keunggulan */}
      <section className="bg-white pb-20 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 text-center shadow hover:shadow-lg transition rounded-xl bg-white">
            <img src="/img/delivery.png" alt="Pengiriman Gratis" className="mx-auto mb-4 h-12" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pengiriman Gratis</h3>
            <p className="text-gray-600">
              Nikmati layanan antar gratis untuk area tertentu tanpa biaya tambahan.
            </p>
          </div>

          <div className="p-6 text-center shadow hover:shadow-lg transition rounded-xl bg-white">
            <img src="/img/waktu.jpeg" alt="Hemat Waktu" className="mx-auto mb-4 h-12" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hemat Waktu</h3>
            <p className="text-gray-600">
              Tidak perlu antre atau macet, semua bisa dipesan dari rumah atau kantor Anda.
            </p>
          </div>

          <div className="p-6 text-center shadow hover:shadow-lg transition rounded-xl bg-white">
            <img src="/img/diskon.png" alt="Diskon Rutin" className="mx-auto mb-4 h-12" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Diskon Rutin</h3>
            <p className="text-gray-600">
              Dapatkan promo menarik dan diskon spesial setiap minggu untuk pelanggan setia.
            </p>
          </div>

          <div className="p-6 text-center shadow hover:shadow-lg transition rounded-xl bg-white">
            <img src="/img/food.jpeg" alt="Ragam Menu" className="mx-auto mb-4 h-12" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ragam Menu</h3>
            <p className="text-gray-600">
              Pilihan menu dari berbagai restoran dan jenis masakan, sesuai selera Anda.
             
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white px-10 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Kiri: Logo dan Deskripsi */}
        <div>
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-[#FFA800]">🍽️</div>
          <h1 className="text-xl font-bold">
            <span className="text-gray-900">SEDA</span>
            <span className="text-[#FFA800]">P.</span>
          </h1>
        </div>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            The Best <br /> Restaurants <br /> in Your Home
          </h2>
         
        </div>

        {/* Tengah: Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-4">MENU</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>

        {/* Kanan: Kontak & Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">CONTACTS</h3>
          <p className="text-gray-300 mb-2">
            Jl. Merdeka No.123, Jakarta, Indonesia
          </p>
          <p className="text-gray-300 mb-2">sedap@mail.id</p>
          <p className="text-gray-300 mb-4">+62 812 3456 7890</p>

          {/* Sosial Media */}
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Gambar Partner */}
          <div className="flex space-x-4">
            <img src="/img/gojek.png" alt="Partner 1" className="h-10" />
            <img src="/img/shoope.jpeg" alt="Partner 2" className="h-10" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-600 pt-4 flex justify-between text-sm text-gray-400">
        <p>Copyright © 2025. Sedap. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

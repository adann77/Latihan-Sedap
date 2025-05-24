import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Misi Kami adalah <span className="text-orange-500">Menghemat Waktu Anda</span>
          </h2>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            Sedap adalah aplikasi pemesanan makanan yang dirancang untuk mempermudah dan mempercepat proses pembelian makanan favorit Anda dari berbagai restoran terbaik di sekitar Anda.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Keunggulan kami adalah <strong>kecepatan</strong>, <strong>kemudahan penggunaan</strong>, dan <strong>teknologi terkini</strong> yang memastikan pengalaman pengguna yang maksimal.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/makanan.jpg"
            alt="Makanan"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

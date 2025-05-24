import React from 'react';
import products from '../../data/TopProducts.json';

export default function TopProducts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Produk Unggulan</h2>
      <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
        Temukan makanan favorit pelanggan kami yang paling sering dipesan setiap harinya!
      </p>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 p-6 border border-gray-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-contain mb-4 rounded-xl"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-orange-500 font-bold text-md md:text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

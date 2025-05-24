import React, { useState } from 'react';
import testimonials from '../../data/testimonials.json';

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  if (!testimonials.length) {
    return <p className="p-10 text-center">No testimonials available.</p>;
  }

  const { avatar, name, text } = testimonials[current];

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 md:px-10 bg-white flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 transition-all duration-300">
      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Berikut beberapa ulasan dari beberapa customer 
        </h2>
        <p className="text-gray-600 text-lg mb-6 transition-opacity duration-500">"{text}"</p>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover transition-all duration-300"
          />
          <p className="text-gray-800 font-semibold">{name}</p>
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 border border-gray-400 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-gray-400 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>

      {/* Dynamic Image Section */}
      <div className="relative w-[80%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="rounded-[2rem] border-4 border-yellow-400 p-4 md:p-6 rotate-3 transition-transform duration-500">
          <img
            src={avatar}
            alt={name}
            className="w-full h-auto max-h-[28rem] object-cover rounded-[2rem] -rotate-3 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}

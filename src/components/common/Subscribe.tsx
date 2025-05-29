import React from "react";

export default function Subscribe() {
  return (
    <>
      <section className="relative bg-electric-blue py-16 overflow-hidden">
        <img
          src="/subscribe-shape-1.png"
          className="absolute top-0 left-0 opacity-10"
          alt=""
        />
        <img
          src="/subscribe-shape-2.png"
          className="absolute top-0 right-0 opacity-10"
          alt=""
        />
        <img
          src="/subscribe-shape-3.png"
          className="absolute bottom-0 left-0 opacity-10"
          alt=""
        />
        <img
          src="/subscribe-shape-4.png"
          className="absolute bottom-0 right-0"
          alt=""
        />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-6">
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-white font-medium text-sm mb-2 tracking-wide">
              SALE 20% OFF ALL STORE
            </p>
            <h2 className="text-white font-bold text-4xl md:text-5xl">
              Subscribe our Newsletter
            </h2>
          </div>

          {/* Subscribe Form */}
          <form className="flex w-full max-w-2xl bg-white rounded-md overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-4 font-semibold hover:bg-gray-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

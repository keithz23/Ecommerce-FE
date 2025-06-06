"use client";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const ButtonItem = [
  { id: 1, name: "New" },
  { id: 2, name: "Featured" },
  { id: 3, name: "Top Sellers" },
];

const productData = [
  {
    id: 1,
    name: "Classic Running Shoes",
    desc: "Comfortable and stylish running shoes for daily workouts.",
    price: 59.99,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/0cff693f-fece-490c-994b-94a7910714e8.jpg",
      },
    ],
    categories: "Shoes",
  },
  {
    id: 2,
    name: "Men's Casual Shirt",
    desc: "Breathable cotton shirt perfect for casual outings.",
    price: 29.99,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/248c2b9e-eccb-4ec9-8aee-0483e9a863bc.jpg",
      },
    ],
    categories: "Shoes",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    desc: "High quality wireless headphones with noise cancellation.",
    price: 99.99,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/2a4a674e-ae70-450d-aae6-b84e146faa3d.jpg",
      },
    ],
    categories: "Shoes",
  },
  {
    id: 4,
    name: "Leather Wallet",
    desc: "Durable leather wallet with multiple card slots.",
    price: 25.0,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/b3233254-1bc9-45ca-8163-21b75dc31522.jpg",
      },
    ],
    categories: "Shoes",
  },
  {
    id: 5,
    name: "Sports Cap",
    desc: "Lightweight and breathable cap for sports activities.",
    price: 15.5,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/36b3e0ff-c237-415e-8be4-a024377239c6.jpg",
      },
    ],
    categories: "Shoes",
  },
  {
    id: 6,
    name: "Elegant Wristwatch",
    desc: "Water-resistant wristwatch with leather strap.",
    price: 149.99,
    imagePath: [
      {
        url: "https://spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com/product/3f418b0c-1cfb-42e5-9207-85609ed54651.jpg",
      },
    ],
    categories: "Shoes",
  },
];

export default function Deal() {
  const [active, setActive] = useState<string>("New");

  return (
    <div className="bg-cloud-blue">
      <section className="max-w-7xl mx-auto py-10 px-5">
        {/* Title */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {/* Title */}
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-4xl font-semibold relative z-10">
              Deal of The Day
            </h1>
            <svg
              width="114"
              height="35"
              viewBox="0 0 114 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 text-pink-vibe mt-5 z-0"
            >
              <path
                d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
                stroke="currentColor"
                strokeWidth="4"
                strokeMiterlimit="3.8637"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Divide */}
          <div className="flex flex-col justify-center">
            <div className="border-t-1"></div>
          </div>

          {/* Button */}
          <div className="flex justify-center gap-5">
            {ButtonItem.map((bi) => (
              <button
                key={bi.id}
                className={`text-xl text-neutral-gray font-semibold cursor-pointer`}
                onClick={() => {
                  setActive(bi.name);
                }}
              >
                <span
                  className={`${active == bi.name ? "text-mid-night" : ""}`}
                >
                  {bi.name}
                </span>
                {active == bi.name && (
                  <svg
                    width="52"
                    height="13"
                    viewBox="0 0 52 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-electric-blue -mt-2"
                  >
                    <path
                      d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeMiterlimit="3.8637"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product */}
        <div className="mt-5">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {" "}
              {productData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-8 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="relative overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded hover:shadow-lg">
                    <div className="relative w-full aspect-[2/3]">
                      {" "}
                      <Image
                        src={item.imagePath?.[0]?.url || ""}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>

                    <div className="p-5 border-t-2">
                      <span className="block mb-2 text-sm text-mid-night font-semibold line-clamp-2">
                        {item.categories}
                      </span>
                      <span className="block mb-2 text-md text-mid-night font-semibold line-clamp-2">
                        {item.name}
                      </span>
                      <div className="flex justify-between">
                        <span className="text-xl font-bold text-electric-blue">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 absolute right-4 bottom-32 p-3 bg-black/70 text-white rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer z-10 shadow-lg">
                      <Heart className="w-5 h-5 hover:text-red-500 transition" />
                      <Eye className="w-5 h-5 hover:text-blue-400 transition" />
                      <ShoppingCart className="w-5 h-5 hover:text-green-400 transition" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

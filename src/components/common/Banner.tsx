"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const Banner = () => {
  const bannerData = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Discover the hottest trends",
      description: "Up to 50% off on selected items",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      gradient: "from-orange-400 to-pink-500",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "Tech Innovation",
      subtitle: "Latest gadgets & electronics",
      description: "Free shipping on orders over $100",
      image:
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=400&fit=crop",
      gradient: "from-blue-500 to-purple-600",
      buttonText: "Explore",
    },
    {
      id: 3,
      title: "Home & Living",
      subtitle: "Transform your space",
      description: "New arrivals every week",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop",
      gradient: "from-green-400 to-teal-500",
      buttonText: "View Collection",
    },
    {
      id: 4,
      title: "Fashion Forward",
      subtitle: "Style that speaks",
      description: "Exclusive designer collaborations",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop",
      gradient: "from-purple-500 to-indigo-600",
      buttonText: "Discover",
    },
    {
      id: 5,
      title: "Fitness & Health",
      subtitle: "Your wellness journey",
      description: "Premium quality at affordable prices",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      gradient: "from-red-400 to-orange-500",
      buttonText: "Get Started",
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
  };

  // Auto-play functionality
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto mt-0.5">
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px] overflow-hidden shadow-2xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerData.map((slide, index) => (
            <div
              key={slide.id}
              className="relative w-full h-full flex-shrink-0"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-10`}
                ></div>

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6 md:px-12">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-2 drop-shadow">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-white/80 mb-8 drop-shadow">
                    {slide.description}
                  </p>
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-md font-semibold text-lg border hover:text-white transition-all duration-300 transform hover:bg-transparent shadow-lg cursor-pointer">
                    <div className="flex gap-x-2 items-center">
                      {slide.buttonText}
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <svg
            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-3">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useAuthStore } from "../store/auth/useAuthStore";
import useDropdown from "../hooks/useDropdown";
import { ChevronDown, Facebook, LogOut, PhoneCall } from "lucide-react";
import SubHeader from "@/components/Header/SubHeader";
import { CounterItem } from "../constants/AboutData";
import Footer from "@/components/Footer/Footer";
import { useWindowEvents } from "../hooks/useWindowsEvent";
import Cart from "@/components/cart/Cart";
import { useCartStore } from "../store/cart/useCartStore";

export default function About() {
  const router = useRouter();
  const { toggle, isOpen } = useDropdown();
  const { isScrolled } = useWindowEvents();
  const { isAuthenticated, logout } = useAuthStore();
  const { isCartOpen, closeCart } = useCartStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const languages = ["English", "Spanish", "French"];
  const dropdownItemClass = "px-4 py-2 cursor-pointer hover:bg-gray-100";

  return (
    <div className="selection:bg-mid-night selection:text-white">
      {/* Top Header */}
      <div className="w-full px-3 sm:px-5 mx-auto text-xs sm:text-sm bg-white shadow-sm mb-1 hidden lg:block">
        <div className="max-w-7xl flex flex-col sm:flex-row items-center justify-between mx-auto py-2 sm:py-0 gap-2 sm:gap-0">
          {/* Social */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <span className="flex items-center gap-1 sm:gap-2">
              <Facebook className="text-electric-blue w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hover:text-electric-blue transition-all duration-300 cursor-pointer text-xs sm:text-sm">
                7500k Followers
              </span>
            </span>
            <div className="hidden sm:block border-l-2 h-10" />
            <span className="flex items-center gap-1 sm:gap-2">
              <PhoneCall className="text-electric-blue w-4 h-4 sm:w-5 sm:h-5" />
              <a
                href="tel:+(402) 763 282 46"
                className="hover:text-electric-blue transition-all duration-300 text-xs sm:text-sm"
              >
                +(402) 763 282 46
              </a>
            </span>
          </div>

          <div
            ref={dropdownRef}
            className="flex items-center gap-x-2 sm:gap-x-4 w-full sm:w-auto justify-center sm:justify-end"
          >
            {/* Language Selector */}
            <div className="relative">
              <button
                aria-haspopup="true"
                aria-expanded={isOpen("language")}
                aria-controls="language-dropdown"
                className="flex items-center text-black bg-transparent cursor-pointer focus:outline-none text-xs sm:text-sm"
                onClick={() => toggle("language")}
              >
                English <ChevronDown className="ml-1" size={14} />
              </button>
              <ul
                id="language-dropdown"
                role="menu"
                className={`absolute right-0 sm:left-0 bg-white text-black shadow-lg mt-2 z-50 text-xs sm:text-sm rounded transition-all duration-200 min-w-max ${
                  isOpen("language")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {languages.map((lang) => (
                  <li key={lang} role="menuitem">
                    <button className={dropdownItemClass}>{lang}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-4 border-l border-gray-300" />

            {/* Settings */}
            <div className="relative">
              <button
                aria-haspopup="true"
                aria-expanded={isOpen("setting")}
                aria-controls="setting-dropdown"
                className="flex items-center text-black cursor-pointer focus:outline-none text-xs sm:text-sm"
                onClick={() => toggle("setting")}
              >
                Settings <ChevronDown className="ml-1" size={14} />
              </button>
              <ul
                id="setting-dropdown"
                role="menu"
                className={`absolute right-0 bg-white text-black shadow-lg mt-2 min-w-max text-xs sm:text-sm rounded transition-all duration-200 z-50 ${
                  isOpen("setting")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <li role="menuitem" className={dropdownItemClass}>
                  <Link href="/profile">My Profile</Link>
                </li>
                <li role="menuitem" className={dropdownItemClass}>
                  <button type="button">Wishlist</button>
                </li>
                <li role="menuitem" className={dropdownItemClass}>
                  <Link href="/cart-details">Cart</Link>
                </li>
                {isAuthenticated ? (
                  <li role="menuitem">
                    <button
                      className="flex items-center w-full gap-1 px-4 py-2 text-left cursor-pointer hover:bg-gray-100"
                      onClick={handleLogout}
                      type="button"
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </li>
                ) : (
                  <li role="menuitem">
                    <Link
                      href="/login"
                      className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`sticky top-0 w-full z-20 bg-white transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-md opacity-100" : "shadow-sm opacity-95"
        }`}
      >
        <SubHeader />
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto py-5 sm:py-10 px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="my-5 sm:my-10">
          <span className="text-electric-blue text-sm sm:text-base">
            History
          </span>
          <h1 className="text-mid-night text-2xl sm:text-4xl md:text-6xl lg:text-8xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Well-coordinated Teamwork Speaks About Us
          </h1>
        </div>

        {/* Image area */}
        <section className="my-5 sm:my-10 w-full">
          <img
            src="assets/about-big-1.jpg"
            alt="About us"
            className="w-full h-auto object-cover rounded-lg"
          />
        </section>

        {/* About area */}
        <section className="max-w-5xl mx-auto p-3 sm:p-5 text-sm sm:text-base lg:text-lg text-dark-gray">
          <p className="mb-5 sm:mb-10 leading-relaxed">
            We are thrilled to offer you a wide range of products that you won't
            find anywhere else. Whether you're shopping for clothing,
            accessories, gadgets, or home decor, we have something for everyone.
          </p>
          <p className="leading-relaxed">
            Our commitment to quality is reflected in every product we offer. We
            work with top suppliers and manufacturers to ensure that every item
            we sell meets our high standards for durability, performance, and
            style. And with a user-friendly interface and intuitive navigation,
            shopping on our site is a breeze. We understand that security is a
            top concern for online shoppers, which is why we employ the latest
            encryption technologies and follow industry best practices to keep
            your personal information safe. And with fast, reliable shipping
            options, you can enjoy your purchases in no time.
          </p>
        </section>

        {/* Counter area */}
        <section className="py-5 sm:py-10 px-4 sm:px-12 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-4">
            {CounterItem.map((ci) => (
              <div
                className="flex gap-3 justify-center sm:justify-start"
                key={ci.id}
              >
                {ci.svg}

                <div className="text-center sm:text-left">
                  <h4 className="text-mid-night text-3xl sm:text-4xl lg:text-5xl font-bold">
                    {ci.title}
                  </h4>
                  <p className="text-base sm:text-lg lg:text-xl text-dark-gray">
                    {ci.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* History area */}
      <section className="bg-[#f8f8f8]">
        <div className="p-20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="">
              <h1 className="text-mid-night text-4xl font-semibold">
                About our <p>Online Store</p>
              </h1>
              <p className="my-5 sm:mb-10 leading-relaxed text-dark-gray">
                At our eCommerce site, we are passionate about providing our
                customers with the best possible shopping experience. From our
                extensive product selection to our exceptional customer service,
                we are committed to exceeding your expectations.
              </p>
              <p className="leading-relaxed text-dark-gray">
                So start browsing today and find the perfect products to suit
                your needs!
              </p>

              <p className="text-[#e7e7e7] text-[100px] my-10 font-semibold tracking-widest">
                2016
              </p>
            </div>
            <div className="col-span-2 mx-auto relative">
              <div className="p-1 border">
                <img
                  src="/assets/history-1.jpg"
                  alt=""
                  className="object-center"
                />
              </div>

              <div className="absolute p-5 bg-white bottom-62 -left-12 shadow-md">
                <p className="italic">
                  Welcome to our <br /> Shofy eCommerce Theme
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer  */}
      <Footer />

      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
}

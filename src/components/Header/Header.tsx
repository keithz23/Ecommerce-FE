"use client";
import {
  ChevronDown,
  ChevronRight,
  CircleUserIcon,
  Heart,
  ShoppingBag,
  LogOut,
  Menu,
  PhoneCall,
  AlignLeft,
  SearchIcon,
} from "lucide-react";
import SubHeader from "./SubHeader";
import Link from "next/link";
import { useState, useRef } from "react";
import { useAuthStore } from "@/app/store/auth/useAuthStore";
import { useRouter } from "next/router";
import { useWindowEvents } from "@/app/hooks/useWindowsEvent";

interface HeaderColor {
  color?: string;
}

const categoriesData = [
  { id: 1, name: "Shoes" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Accessories" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Products", href: "/feature" },
  { name: "Contact", href: "/contact" },
];

export const Header: React.FC<HeaderColor> = ({ color = "bg-black" }) => {
  const [openDropdown, setOpenDropDown] = useState<string | null>(null);
  const { isScrolled, isMobile } = useWindowEvents();
  const { isAuthenticated, logout, user } = useAuthStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdownKey: string) => {
    setOpenDropDown((prev) => (prev === dropdownKey ? null : dropdownKey));
  };

  const handleLogout = () => {
    logout();
    useRouter().push("/login");
  };

  return (
    <>
      {/* Top Header */}
      <div className={`hidden lg:block h-9 ${color}`}>
        <div className="container flex items-center justify-end h-full px-5 mx-auto text-sm text-white">
          <div ref={dropdownRef} className="flex items-center gap-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                aria-expanded={openDropdown === "language"}
                aria-controls="language-dropdown"
                className="flex items-center text-white bg-transparent cursor-pointer focus:outline-none"
                onClick={() => {
                  toggleDropdown("language");
                }}
              >
                English <ChevronDown className="ml-1" size={16} />
              </button>
              <ul
                id="language-dropdown"
                className={`absolute bg-white text-black shadow-lg mt-2 z-30 text-sm rounded transition-all duration-200 ${
                  openDropdown === "language"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {["English", "Spanish", "French"].map((lang) => (
                  <li
                    key={lang}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-4 border-l border-gray-300"></div>

            {/* Settings */}
            <div className="relative">
              <button
                aria-expanded={openDropdown === "setting"}
                aria-controls="setting-dropdown"
                className="flex items-center text-white cursor-pointer focus:outline-none"
                onClick={() => {
                  toggleDropdown("setting");
                }}
              >
                Settings <ChevronDown className="ml-1" size={16} />
              </button>
              <ul
                id="setting-dropdown"
                className={`absolute bg-white text-black shadow-lg mt-2 min-w-max text-sm rounded transition-all duration-200 z-10 ${
                  openDropdown === "setting"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  <Link href="/profile">My Profile</Link>
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  Wishlist
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  <Link href="/cart-details">Cart</Link>
                </li>
                {isAuthenticated ? (
                  <button
                    className="flex items-center w-full gap-1 px-4 py-2 text-left cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Login
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div
        className={`fixed top-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isScrolled || isMobile
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <SubHeader />
      </div>

      <div
        className={`lg:h-24 py-6 border-b border-gray-300 transform transition-all duration-200 ${
          isScrolled || isMobile
            ? "opacity-0 -translate-y-2 pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto"
        }`}
      >
        <div className="container grid items-center grid-cols-3 px-4 mx-auto">
          {/* Logo */}
          <div className="col-span-1">
            <Link href="/">
              <img
                src="https://shofy-svelte.vercel.app/img/logo/logo.svg"
                alt="Brand Logo"
                className="h-8"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden lg:flex col-span-1 border-2 border-electric-blue h-12 relative z-50 items-center p-3">
            {/* Search Input */}
            <input
              type="text"
              className="flex-1 focus:outline-none"
              placeholder="Search for Products..."
            />
            <button type="submit">
              <SearchIcon className="w-5 h-5 cursor-pointer" />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end col-span-2 lg:col-span-1 gap-x-4">
            <Link href="/profile" className="items-center hidden lg:flex">
              <CircleUserIcon className="w-8 h-8 mr-2 text-gray-700" />
              <div>
                <span className="text-sm font-medium text-gray-500">
                  {isAuthenticated
                    ? `Hi, ${user?.name ?? user?.username}`
                    : "Sign In"}
                </span>
                <h5 className="font-bold text-gray-700 text-md">
                  Your Account
                </h5>
              </div>
            </Link>
            <Heart className="hidden lg:block h-6 w-6 text-gray-700 hover:text-electric-blue cursor-pointer" />
            <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-electric-blue cursor-pointer" />
            <button className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Menu */}
      <div className="h-12 hidden lg:block mt-0.5">
        <div className="container items-center hidden grid-cols-3 px-4 mx-auto lg:grid">
          <div className="relative flex items-center col-span-2 gap-x-10">
            <button
              aria-expanded={openDropdown === "all category"}
              aria-controls="all-category-dropdown"
              className="flex items-center justify-center h-12 border text-white border-electric-blue w-1/3 bg-electric-blue hover:bg-black transition-all duration-300 gap-2 hover:border-black hover:cursor-pointer"
              onClick={() => {
                toggleDropdown("all category");
              }}
            >
              <AlignLeft className="w-5 h-5" />
              <span>All Categories</span>
              <ChevronDown
                className={`transform transition-all duration-200 ${
                  openDropdown === "all category" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Category Dropdown */}
            <div
              id="all-category-dropdown"
              className={`absolute bg-white top-full z-50 min-w-[334px] left-0 border border-gray-200 shadow-lg transition-all duration-500 max-h-52 overflow-auto ${
                openDropdown === "all category"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <ul className="p-4 space-y-3">
                {categoriesData.map((category) => (
                  <li
                    key={category.id}
                    className="p-2 transition rounded-md cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-x-4 group">
                      <div className="flex items-center gap-x-4">
                        <div className="flex items-center justify-center w-10 h-10 font-bold text-blue-700 bg-blue-100 rounded-md">
                          {category.name.slice(0, 3).toUpperCase()}
                        </div>
                        <span className="text-sm font-medium text-gray-800 group-hover:text-electric-blue transition-all duration-200">
                          {category.name}
                        </span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-electric-blue transition-all duration-200" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="flex gap-4 text-gray-700 text-md">
                {navItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-electric-blue cursor-pointer flex gap-2 items-center"
                  >
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hotline */}
          <div className="flex items-center justify-end gap-x-3">
            <PhoneCall className="text-electric-blue" />
            <div>
              <span className="text-sm text-gray-600">Hotline:</span>
              <p className="hover:text-electric-blue hover:cursor-pointer transition-all duration-200">
                +(402) 763 282 46
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

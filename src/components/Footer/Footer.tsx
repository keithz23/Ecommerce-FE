import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Linkedin,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const SocialItem = [
  {
    id: 1,
    name: "Facebook",
    icon: (
      <Facebook className="text-dark-gray group-hover:text-white font-semibold h-5 w-5" />
    ),
  },
  {
    id: 2,
    name: "Instagram",
    icon: (
      <Instagram className="text-dark-gray group-hover:text-white font-semibold h-5 w-5" />
    ),
  },
  {
    id: 3,
    name: "Linked In",
    icon: (
      <Linkedin className="text-dark-gray group-hover:text-white font-semibold h-5 w-5" />
    ),
  },
  {
    id: 4,
    name: "Gmail",
    icon: (
      <Mail className="text-dark-gray group-hover:text-white font-semibold h-5 w-5" />
    ),
  },
];

const MyAccountItem = [
  { id: 1, name: "Track Orders" },
  { id: 2, name: "Shipping" },
  { id: 3, name: "Wishlist" },
  { id: 4, name: "My Account" },
  { id: 5, name: "Order History" },
  { id: 6, name: "Returns" },
];

const InformationItem = [
  { id: 1, name: "Our Story" },
  { id: 2, name: "Careers" },
  { id: 3, name: "Privacy Policy" },
  { id: 4, name: "Terms & Conditions" },
  { id: 5, name: "Latest News" },
  { id: 6, name: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f4f7f9] text-mid-night md:p-22 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* Logo */}
        <div className="flex flex-col justify-center gap-3">
          <Link href="/">
            <img
              src="https://shofy-svelte.vercel.app/img/logo/logo.svg"
              alt="Brand Logo"
              className="h-8"
            />
          </Link>

          {/* Caption */}
          <p className="font-normal text-md text-mid-night">
            We are a team of designers and developers that create high-quality
            WordPress themes.
          </p>

          {/* Social */}
          <div className="flex items-center gap-x-3">
            {SocialItem.map((si) => (
              <div
                key={si.id}
                className="border p-2 bg-white shadow-sm rounded hover:bg-electric-blue cursor-pointer group transition-all duration-300"
              >
                <div className="hover:text-white">{si.icon}</div>
              </div>
            ))}
          </div>
        </div>

        {/* My Account */}
        <div>
          <h3 className="uppercase font-bold mb-5">My Account</h3>
          <ul className="space-y-3 text-md text-mid-night list-disc px-5">
            {MyAccountItem.map((mi) => (
              <li
                className="hover:text-electric-blue transition-all duration-300 cursor-pointer"
                key={mi.id}
              >
                {mi.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="uppercase font-bold mb-5">Information</h3>

          <ul className="space-y-3 text-md text-mid-night list-disc px-5">
            {InformationItem.map((ii) => (
              <li
                className="hover:text-electric-blue transition-all duration-300 cursor-pointer"
                key={ii.id}
              >
                {ii.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Talk To Us */}
        <div>
          <h3 className="uppercase font-bold mb-5">Talk To Us</h3>
          <div className="flex flex-col gap-2">
            {/* Question */}
            <p>Got Questions? Call us</p>
            <span className="font-bold text-lg hover:text-electric-blue cursor-pointer transition-all duration-300">
              <a href="te:670 413 90 762"></a>+670 413 90 762
            </span>

            {/* Email */}
            <div className="flex gap-x-2">
              <Mail />{" "}
              <span className="hover:text-electric-blue transition-all duration-300 text-lg">
                <a href="mailto:shofy@support.com">shofy@support.com</a>
              </span>
            </div>

            {/* Location */}
            <div className="flex gap-x-2">
              <MapPin />{" "}
              <span className="hover:text-electric-blue transition-all duration-300 text-lg">
                <a
                  href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642,+USA/@44.3304966,-75.4552367,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4"
                  target="_blank"
                >
                  79 Sleepy Hollow St. <br /> Jamaica, New York 1432
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-sm text-gray-400 mt-32 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} EcomGrove. All rights reserved.
      </div>
    </footer>
  );
}

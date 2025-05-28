import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white md:p-12 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Categories */}
        <div>
          <h3 className="uppercase font-bold mb-5">Categories</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-indigo-400 transition"><a href="#">Men</a></li>
            <li className="hover:text-indigo-400 transition"><a href="#">Women</a></li>
            <li className="hover:text-indigo-400 transition"><a href="#">Accessories</a></li>
            <li className="hover:text-indigo-400 transition"><a href="#">Sale</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="uppercase font-bold mb-5">Help</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-indigo-400 transition"><a href="#">FAQs</a></li>
            <li className="hover:text-indigo-400 transition"><a href="#">Shipping</a></li>
            <li className="hover:text-indigo-400 transition"><a href="#">Returns</a></li>
            <li className="hover:text-indigo-400 transition"><a href="#">Order Status</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="uppercase font-bold mb-5">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Mail className="inline-block mr-2 w-4 h-4" /> support@example.com</li>
            <li><Phone className="inline-block mr-2 w-4 h-4" /> +84 123 456 789</li>
            <li className="flex gap-4 mt-4">
              <a href="#" className="hover:text-indigo-400"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram className="w-5 h-5" /></a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="uppercase font-bold mb-5">Newsletter</h3>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full py-2 px-3 text-sm text-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="mt-4 w-full py-2 bg-indigo-500 hover:bg-white hover:text-indigo-500 transition text-white font-semibold rounded">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </div>
    </footer>
  );
}


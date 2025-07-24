"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Leaf,
  User,
  LogOut,
  UserPlus,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { div, li } from "framer-motion/client";

const Navbar = () => {
  // Navigation configuration
  const navigation = [
    { name: "Home", href: "/", priority: 1 },
    { name: "About", href: "/about", priority: 1 },
    { name: "Tips & Guides", href: "/tips", priority: 1 },
    { name: "Encyclopedia", href: "/encyclopedia", priority: 1 },
    { name: "DIY Projects", href: "/diy", priority: 2 },
    { name: "Gallery", href: "/gallery", priority: 2 },
    { name: "Blog", href: "/blog", priority: 2 },
    { name: "AI Assistant", href: "/assistant", priority: 2 },
    { name: "Plant Scanner", href: "/scanner", priority: 2 },
    { name: "FAQ", href: "/faq", priority: 2 },
    { name: "Contact", href: "/contact", priority: 2 },
  ];

  const mainPages = navigation.filter((item) => item.priority === 1);
  const secondaryPages = navigation.filter((item) => item.priority === 2);

  return (
    <nav className="flex justify-center w-full">
      <div className="flex justify-between fixed top-4 transform bg-white/80 backdrop-blur-md shadow-md px-6 py-3 ml-5 mr-5  rounded-full z-50 border border-green-200 w-[90%]">
        <div className="flex justify-between items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-leaf text-emerald-600 w-8 h-8 transition-transform duration-700 hover:rotate-[360deg]"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
          <strong className=" text-emerald-600 text-2xl ">Urbanai</strong>
        </div>

        <div className=" px-6 py-2 list-none w-auto flex space-x-6 transform bg-white/80 backdrop-blur-md shadow-md rounded-full">
          {mainPages.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button className="border border-green-600 text-green-600 rounded-full px-4 py-1 text-sm hover:bg-green-100 transition">
            Submit Idea
          </button>
          <button className="bg-indigo-500 text-white rounded-full px-4 py-1 text-sm flex items-center gap-1 hover:bg-indigo-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M22 24l-5.5-5.5H7.5L2 24V2h20v22z" />
            </svg>
            Join Discord
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

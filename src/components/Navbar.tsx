"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, UserCircle, Search, Home, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* 1. Brand Logo (Always Visible) */}
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Estate<span className="text-blue-600">Sync</span>
            </span>
          </Link>

          {/* 2. Desktop Search Bar (Hidden on Mobile) */}
          <div className="hidden flex-1 items-center justify-center px-8 md:flex">
            <div className="flex w-full max-w-lg items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 shadow-inner transition-all focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, property type..."
                className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* 3. Action Icons & Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/wishlist" className="group p-2 rounded-full hover:bg-red-50 transition-colors" aria-label="Wishlist">
                <Heart className="h-5 w-5 text-gray-600 group-hover:text-red-500" />
              </Link>
              <Link href="/profile" className="p-2 rounded-full hover:bg-blue-50 transition-colors" aria-label="Profile">
                <UserCircle className="h-5 w-5 text-gray-600 hover:text-blue-600" />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <div className="space-y-4 px-4 pb-6 pt-4">
            
            {/* Mobile Search */}
            <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-blue-500 focus-within:bg-white">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                className="ml-3 w-full bg-transparent outline-none placeholder:text-gray-500"
              />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-1">
              <Link 
                href="/wishlist" 
                className="flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                <Heart className="h-5 w-5" /> My Wishlist
              </Link>
              <Link 
                href="/profile" 
                className="flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <UserCircle className="h-5 w-5" /> Profile & Settings
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
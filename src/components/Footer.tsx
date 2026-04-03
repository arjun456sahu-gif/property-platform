import Link from "next/link";
import { Home, Globe, X, AtSign, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      
      {/* 1. Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-6 w-6 text-blue-500" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Estate<span className="text-blue-500">Sync</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner in finding the perfect home. We provide premium real estate services with transparency and excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><X className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><AtSign className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/properties" className="hover:text-blue-400 transition-colors">All Properties</Link></li>
              <li><Link href="/wishlist" className="hover:text-blue-400 transition-colors">My Wishlist</Link></li>
              <li><Link href="/profile" className="hover:text-blue-400 transition-colors">My Account</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>123 EstateSync Tower, Koramangala, Bangalore, India 560034</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>support@estatesync.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 2. Bottom Copyright Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} EstateSync. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer">Designed with ❤️ for Real Estate</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
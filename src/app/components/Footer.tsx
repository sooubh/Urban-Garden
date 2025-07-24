import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">GardenAI</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your intelligent companion for home gardening success. Grow better with AI-powered insights and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/tips" className="text-gray-300 hover:text-green-400 transition-colors">Gardening Tips</Link></li>
              <li><Link href="/encyclopedia" className="text-gray-300 hover:text-green-400 transition-colors">Plant Encyclopedia</Link></li>
              <li><Link href="/diy" className="text-gray-300 hover:text-green-400 transition-colors">DIY Projects</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/assistant" className="text-gray-300 hover:text-green-400 transition-colors">AI Assistant</Link></li>
              <li><Link href="/scanner" className="text-gray-300 hover:text-green-400 transition-colors">Plant Scanner</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">info@gardenai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Garden City, Green State</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 GardenAI. All rights reserved. Made with 🌱 for garden enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
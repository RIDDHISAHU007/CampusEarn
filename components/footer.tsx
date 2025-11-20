"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">₹</span>
              </div>
              <span className="text-lg font-bold">CampusEarn</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to earn while they learn. Find flexible part-time jobs that fit your schedule.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4 className="font-semibold mb-4">For Students</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/signup" className="hover:text-white transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-white transition-colors">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:support@campusearn.com" className="hover:text-white transition-colors">
                  support@campusearn.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>All Indian Cities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">© 2025 CampusEarn. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

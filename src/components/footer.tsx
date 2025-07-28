"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

// ✅ Define props interface
interface FooterProps {
  locale?: string;
}

// ✅ Accept props
const Footer: React.FC<FooterProps> = ({ locale }) => {
  return (
    <footer className="w-full px-8 py-12 bg-white text-gray-800 font-primary border-t border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Column 1: Logo, Description, Email */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Digital Pilot Logo" width={40} height={40} />
            <h2 className="mb-2 text-2xl font-semibold">Digital Pilot</h2>
          </div>
          <p className="text-gray-600 max-w-xs leading-relaxed">
            Digital Pilot is a Saudi Arabian digital solutions agency focused on
            secure, scalable tech solutions from design to deployment.
          </p>
          <p className="mt-11 text-sm text-gray-600">codepilot.c@gmail.com</p>
        </div>

        {/* Column 2: Company Links & Phone */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">Projects</Link>
            </li>
            <li>
              <Link href="/odoo" className="hover:underline">Odoo Partnership</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">FAQ</Link>
            </li>
          </ul>
          <p className="mt-10 text-sm text-gray-600">+966 53 847 4397</p>
        </div>

        {/* Column 3: Social Links & Legal */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebookF className="hover:text-blue-600 transition-colors duration-200" />
              </Link>
              <Link href="https://wa.me/966538474397" target="_blank">
                <FaWhatsapp className="hover:text-green-500 transition-colors duration-200" />
              </Link>
              <Link href="#" target="_blank">
                <FaXTwitter className="hover:text-black transition-colors duration-200" />
              </Link>
              <Link href="https://linkedin.com/company/Digital-pilot-sa" target="_blank">
                <FaLinkedinIn className="hover:text-blue-700 transition-colors duration-200" />
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <Image src="/Business-sa-Cr-confirmation.png" alt="QR Code" width={80} height={80} />
          </div>

          <p className="text-sm text-gray-600">© 2025 Digital Pilot. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

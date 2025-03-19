import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <Image src="/images/logo-foot.png" alt="Mamen Logo" width={50} height={50} />
          <nav className="md:ml-6 flex space-x-4">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/podcast" className="hover:text-blue-400">
              Podcast
            </Link>
            <Link href="/channel" className="hover:text-blue-400">
              Channel
            </Link>
          </nav>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

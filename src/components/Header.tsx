import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md absolute z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="">
          <Image
            src="/images/logo.png"
            alt="mamen Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6">
            <Link 
              href={"/"} 
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              Home
            </Link>
            <Link
              href={"/podcast"}
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              Podcast
            </Link>
            <Link
              href={"/channel"}
              className="text-gray-700 hover:text-blue-500 font-semibold"
            >
              Channel
            </Link>
          </nav>

          <Button className="ml-4">Subscribe</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

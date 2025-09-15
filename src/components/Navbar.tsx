import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center border-b border-gray-200 pb-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          Trendy.
        </p>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="h-4 w-4  text-gray-600" />
        </Link>
        <Bell className="h-4 w-4  text-gray-600" />
        <ShoppingCart className="h-4 w-4  text-gray-600" />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;

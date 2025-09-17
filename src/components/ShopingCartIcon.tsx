"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export const ShopingCartIcon = () => {
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4" />
      <span className="absolute -top-3 -right-3 rounded-full bg-amber-300 text-gray-600 flex items-center justify-center w-4 h-4">
        0
      </span>
    </Link>
  );
};

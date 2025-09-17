"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const Filter = () => {
  const searchParams = useSearchParams();
  //   const selectedCategory = searchParams.get("category");
  const router = useRouter();
  const pathname = usePathname();
  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex justify-end items-center text-sm text-gray-500 my-6 gap-2 ">
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 p-1 shadow-md ring-gray-200 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

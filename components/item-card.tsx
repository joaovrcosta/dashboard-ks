import React from "react";

interface InfoCardProps {
  value_1: number | string;
  value_2: number | string;
  className?: string;
}

export function ItemCard({ value_1, value_2, className }: InfoCardProps) {
  return (
    <div
      className={`text-center bg-[#342758] text-white py-4 rounded-2xl shadow-md space-y-1 w-full ${className}`}
    >
      <div className="w-full px-2 border-b border-gray-500">
        <p className="lg:text-lg xl:text-lg md:text-lg text-sm font-light pb-1">
          {value_1}
        </p>
      </div>
      <p className="lg:text-lg xl:text-lg md:text-lg text-sm font-normal">
        {value_2}
      </p>
    </div>
  );
}

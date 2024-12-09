import React from "react";

interface InfoCardProps {
  value_1: number | string;
  value_2: number | string;
  className?: string;
}

export function InfoCard({ value_1, value_2, className }: InfoCardProps) {
  return (
    <div
      className={`text-center bg-card-gradient text-white py-4 rounded-2xl shadow-md space-y-1 w-full ${className}`}
    >
      <div className="w-full px-2 border-b border-gray-500">
        <p className="text-xs font-bold pb-1">{value_1}</p>
      </div>
      <p className="text-xs font-bold">{value_2}</p>
    </div>
  );
}

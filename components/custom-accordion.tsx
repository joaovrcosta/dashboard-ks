import { useState } from "react";

export function CustomAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "bg-[#19123c] rounded-lg" : "bg-[#19123c] rounded-full"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-white font-medium"
      >
        Is it accessible?
      </button>
      {isOpen && (
        <div className="py-6 px-4 text-white">
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      )}
    </div>
  );
}

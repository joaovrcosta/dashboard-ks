import { useDateStore } from "@/app/_stores/dateStore";
import React, { useEffect } from "react";
import { Button } from "./ui/button";

export function DataFilter() {
  const { setDate, setData } = useDateStore();

  const fetchData = async (date: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/projection?date=${date}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleDateChange = async (date: string) => {
    setDate(date);
    await fetchData(date);
  };

  useEffect(() => {
    handleDateChange("2024-12-16");
  }, []);

  return (
    <div className="mb-4 flex space-x-4 items-center mt-4">
      <Button
        onClick={() => handleDateChange("2024-12-16")}
        className="p-4 text-white hover:bg-gray-700 rounded-full bg-gradient-to-r from-purple-600 to-blue-400"
      >
        Hoje
      </Button>
      <Button
        onClick={() => handleDateChange("2024-12-09")}
        className="p-4  text-white  hover:bg-gray-700 rounded-full bg-gradient-to-r from-purple-600 to-blue-400"
      >
        7 Dias
      </Button>
      <Button
        onClick={() => handleDateChange("2024-12-01")}
        className="p-4  text-white hover:bg-gray-700 rounded-full bg-gradient-to-r from-purple-600 to-blue-400"
      >
        15 Dias
      </Button>
      <Button
        onClick={() => handleDateChange("2024-11-16")}
        className="p-4  text-white hover:bg-gray-700 rounded-full bg-gradient-to-r from-purple-600 to-blue-400"
      >
        30 Dias
      </Button>
    </div>
  );
}

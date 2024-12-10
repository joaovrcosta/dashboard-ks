import { Button } from "./ui/button";

export function DataFilter() {
  return (
    <div className="w-full">
      <div className="flex py-5 w-full space-x-3">
        {["7 dias", "15 dias", "Mês", "Ano"].map((label) => (
          <Button
            key={label}
            className="relative rounded-full w-[80px] text-white overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 hover:animate-gradient-move bg-[length:200%_200%]"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}

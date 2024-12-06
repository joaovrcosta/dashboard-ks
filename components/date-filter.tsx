import { Button } from "./ui/button";

export function DataFilter() {
  return (
    <div className="w-full">
      <div className="flex py-5 w-full space-x-3">
        <Button className="rounded-full  bg-gradient-to-r from-purple-600 to-blue-500">
          7 dias
        </Button>
        <Button className="rounded-full  bg-gradient-to-r from-purple-600 to-blue-500">
          15 dias
        </Button>
        <Button className="rounded-full  bg-gradient-to-r from-purple-600 to-blue-500">
          Mês
        </Button>
        <Button className="rounded-full  bg-gradient-to-r from-purple-600 to-blue-500">
          Ano
        </Button>
      </div>
    </div>
  );
}

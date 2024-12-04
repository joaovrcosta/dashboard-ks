import { Button } from "./ui/button";

export function DataFilter() {
  return (
    <div className="w-full">
      <div className="flex py-5 w-full space-x-3">
        <Button className="rounded-full">7 dias</Button>
        <Button className="rounded-full">15 dias</Button>
        <Button className="rounded-full">Mês</Button>
        <Button className="rounded-full">Ano</Button>
      </div>
    </div>
  );
}

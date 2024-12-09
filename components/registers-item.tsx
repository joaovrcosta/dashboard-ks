import { DashbordCard } from "./dashboard-card";

export function RegisterItems() {
  return (
    <div className="flex space-x-3">
      <DashbordCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashbordCard>
      <DashbordCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashbordCard>
    </div>
  );
}

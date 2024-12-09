import { Card } from "./card";
import { DashbordCard } from "./dashboard-card";

export function FunnelItem() {
  return (
    <div className="space-y-3 items-center justify-center flex flex-col">
      <DashbordCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-full"
      ></DashbordCard>
      <DashbordCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[90%]"
      ></DashbordCard>
      <DashbordCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[80%]"
      ></DashbordCard>
      <DashbordCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashbordCard>
      <DashbordCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[60%]"
      ></DashbordCard>
    </div>
  );
}

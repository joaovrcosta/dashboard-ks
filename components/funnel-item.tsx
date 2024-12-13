import { DashboardCard } from "./dashboard-card";

export function FunnelItem() {
  return (
    <div className="space-y-3 items-center justify-center flex flex-col">
      <DashboardCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-full"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[90%]"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[80%]"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[60%]"
      ></DashboardCard>
    </div>
  );
}

import { DashboardCard } from "./dashboard-card";

export function RegisterItems() {
  return (
    <div className="flex space-x-3">
      <DashboardCard
        titles={[{ label: "Cliente cadastrados", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "Total cadastrado", value: "1500" }]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashboardCard>
    </div>
  );
}

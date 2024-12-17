import { useDateStore } from "@/app/_stores/dateStore";
import { DashboardCard } from "./dashboard-card";

export function FunnelItem() {
  const { data } = useDateStore();

  console.log(data[0]?.funnel.visitors);

  return (
    <div className="space-y-3 items-center justify-center flex flex-col">
      <DashboardCard
        titles={[{ label: "Visitantes", value: data[0]?.funnel.visitors }]}
        className="bg-card-gradient rounded-2xl w-full"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "View Product", value: data[0]?.funnel.viewProduct }]}
        className="bg-card-gradient rounded-2xl w-[90%]"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "Add Cart", value: data[0]?.funnel.addCart }]}
        className="bg-card-gradient rounded-2xl w-[80%]"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "Check out", value: data[0]?.funnel.checkout }]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashboardCard>
      <DashboardCard
        titles={[{ label: "Venda", value: data[0]?.funnel.purchase }]}
        className="bg-card-gradient rounded-2xl w-[60%]"
      ></DashboardCard>
    </div>
  );
}

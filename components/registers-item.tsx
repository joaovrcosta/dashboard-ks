import { useDateStore } from "@/app/_stores/dateStore";
import { DashboardCard } from "./dashboard-card";

export function RegisterItems() {
  const { data } = useDateStore();

  return (
    <div className="flex space-x-3">
      <DashboardCard
        titles={[
          {
            label: "Cliente cadastrados",
            value: data[0]?.registrations.customerRegistrations,
          },
        ]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashboardCard>
      <DashboardCard
        titles={[
          {
            label: "Total cadastrado",
            value: data[0]?.registrations.totalRegistrations,
          },
        ]}
        className="bg-card-gradient rounded-2xl w-[70%]"
      ></DashboardCard>
    </div>
  );
}

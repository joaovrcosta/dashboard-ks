import { Card } from "@/components/card";
import { MultipleChart } from "@/components/Charts/multiple-chart";
import { DashbordCard } from "@/components/dashboard-card";
import { DataFilter } from "@/components/date-filter";
import { Resources } from "@/components/Resources";

export default function DashboardPage() {
  return (
    <div className="px-2">
      <DataFilter />
      <Card className="bg-[#19123C] rounded-2xl p-4" title="Faturamento">
        <div className="space-y-5">
          <DashbordCard
            titles={[
              { label: "Total Gerado no Mês", value: "R$ 500.000,00" },
              { label: "Projeção do Mês", value: "R$ 620.000,00" },
            ]}
            className="bg-card-gradient rounded-3xl"
          ></DashbordCard>
          <DashbordCard
            titles={[
              { label: "Total Pagos/Mês", value: "R$ 400.000,00" },
              { label: "Projeção mês", value: "R$ 500.000,00" },
              { label: "Mark Up", value: "XX" },
            ]}
            className="bg-card-gradient rounded-3xl"
          ></DashbordCard>
          <DashbordCard
            titles={[{ label: "CMV/Pagos/Mês", value: "R$ 150.000,00" }]}
            className="bg-card-gradient rounded-2xl"
          ></DashbordCard>
          <div className="w-full flex space-x-5">
            <DashbordCard
              titles={[{ label: "CMV/Pagos/Mês", value: "1500" }]}
              className="bg-card-gradient rounded-2xl w-full"
            ></DashbordCard>
            <DashbordCard
              titles={[{ label: "CMV/Pagos/Mês", value: "R$ 266,67" }]}
              className="bg-card-gradient rounded-2xl w-full"
            ></DashbordCard>
          </div>
          <DashbordCard
            titles={[{ label: "Total Recompra", value: "350" }]}
            className="bg-card-gradient rounded-2xl w-full"
          ></DashbordCard>
        </div>
      </Card>
      <MultipleChart />
      <Resources />
    </div>
  );
}

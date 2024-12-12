import { Card } from "@/components/card";
import { DevicesChart } from "@/components/Charts/devices-chart";
import { GenderChart } from "@/components/Charts/gender-chart";
import { MultipleChart } from "@/components/Charts/multiple-chart";
import { OSChart } from "@/components/Charts/os-chart";
import { PaymentTypeChart } from "@/components/Charts/payment-type";
import { Top10Ages } from "@/components/Charts/top-10-ages";
import { Top10States } from "@/components/Charts/top-10-states";
import { DashboardCard } from "@/components/dashboard-card";
import { DataFilter } from "@/components/date-filter";
import { FunnelItem } from "@/components/funnel-item";
import { LowStockItem } from "@/components/low-stock-item";
import { RegisterItems } from "@/components/registers-item";
import { Resources } from "@/components/Resources";
import { ShippingItem } from "@/components/shipping-item";
import { TopProducts } from "@/components/top-products";

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center mb-24">
      <div className="xl:px-8 md:px-8 lg:px-8 px-4 max-w-[1720px] w-full">
        <DataFilter />
        <Card
          className="bg-[#19123C] rounded-2xl p-4 lg:hidden xl:hidden md:hidden block"
          title="Faturamento"
        >
          <div className="space-y-8">
            <div>
              <div className="lg:hidden xl:hidden md:hidden block">
                <DashboardCard
                  titles={[
                    { label: "Total Gerado no Mês", value: "R$ 500.000,00" },
                    { label: "Projeção do Mês", value: "R$ 620.000,00" },
                  ]}
                  className="bg-card-gradient rounded-3xl"
                ></DashboardCard>
              </div>
            </div>
            <div className="lg:hidden xl:hidden md:hidden block">
              <DashboardCard
                titles={[
                  { label: "Total Pagos/Mês", value: "R$ 400.000,00" },
                  { label: "Projeção mês", value: "R$ 500.000,00" },
                  { label: "Mark Up", value: "XX" },
                ]}
                className="bg-card-gradient rounded-3xl"
              ></DashboardCard>
            </div>
            <div className="lg:hidden xl:hidden md:hidden block space-y-5">
              <DashboardCard
                titles={[{ label: "CMV/Pagos/Mês", value: "R$ 150.000,00" }]}
                className="bg-card-gradient rounded-3xl"
              ></DashboardCard>
              <div className="w-full flex space-x-8">
                <DashboardCard
                  titles={[{ label: "CMV/Pagos/Mês", value: "1502" }]}
                  className="bg-card-gradient rounded-3xl w-full"
                ></DashboardCard>
                <DashboardCard
                  titles={[{ label: "CMV/Pagos/Mês", value: "R$ 266,67" }]}
                  className="bg-card-gradient rounded-3xl w-full"
                ></DashboardCard>
              </div>
              <DashboardCard
                titles={[{ label: "Total Recompra", value: "350" }]}
                className="bg-card-gradient rounded-3xl w-full"
              ></DashboardCard>
            </div>
          </div>
        </Card>
        {/* Desktop */}
        <div className="space-y-8">
          <div className="flex w-full space-x-8">
            <Card className="lg:block xl:block md:block hidden w-full bg-[#19123c] rounded-2xl">
              <DashboardCard
                titles={[
                  { label: "Total Gerado no Mês", value: "R$ 500.000,00" },
                  { label: "Projeção do Mês", value: "R$ 620.000,00" },
                ]}
                className="bg-card-gradient rounded-3xl"
              ></DashboardCard>
            </Card>
            <Card className="lg:block xl:block md:block hidden w-full bg-[#19123c] rounded-2xl">
              <DashboardCard
                titles={[
                  { label: "Total Pagos/Mês", value: "R$ 400.000,00" },
                  { label: "Projeção mês", value: "R$ 500.000,00" },
                  { label: "Mark Up", value: "XX" },
                ]}
                className="bg-card-gradient rounded-3xl"
              ></DashboardCard>
            </Card>
          </div>
          <div className="hidden md:flex items-center space-x-8 bg-[#19123c] p-4 rounded-2xl">
            <DashboardCard
              titles={[{ label: "CMV/Pagos/Mês", value: "R$ 150.000,00" }]}
              className="bg-card-gradient rounded-3xl w-full"
            ></DashboardCard>

            <DashboardCard
              titles={[{ label: "CMV/Pagos/Mês", value: "1505" }]}
              className="bg-card-gradient rounded-3xl w-full"
            ></DashboardCard>

            <DashboardCard
              titles={[{ label: "CMV/Pagos/Mês", value: "R$ 266,67" }]}
              className="bg-card-gradient rounded-3xl w-full"
            ></DashboardCard>

            <DashboardCard
              titles={[{ label: "Total Recompra", value: "350" }]}
              className="bg-card-gradient rounded-3xl w-full"
            ></DashboardCard>
          </div>
        </div>
        <MultipleChart />
        <section className="space-y-8 xl:block lg:block md:block hidden">
          <div className="flex space-x-8">
            <Card
              className="bg-[#19123c] rounded-2xl w-[60%]"
              title="Funil de Vendas"
            >
              <FunnelItem />
            </Card>
            <div className="flex flex-col w-full space-y-8">
              <Card
                className="bg-[#19123c] rounded-2xl w-full h-full"
                title="Produtos com Estoque Baixo"
              >
                <div className="mt-14">
                  <LowStockItem />
                </div>
              </Card>
              <Card
                className="bg-[#19123c] rounded-2xl w-full h-full"
                title="Top 10 - Produtos (Faturamento)"
              >
                <div className="mt-14">
                  <TopProducts />
                </div>
              </Card>
            </div>
          </div>
          <div className="flex space-x-8">
            <Card className="w-[60%] bg-[#19123c] rounded-2xl" title="Frete">
              <ShippingItem />
            </Card>
            <Card
              className="w-full bg-[#19123c] rounded-2xl"
              title="Tipos de pagamento"
            >
              <PaymentTypeChart />
            </Card>
          </div>
          <div>
            <Card className="w-full bg-[#19123c] rounded-2xl" title="Cadastros">
              <RegisterItems />
            </Card>
          </div>
          <div className="flex space-x-8">
            <Card
              className="w-full bg-[#19123c] rounded-2xl"
              title="Top 10 - Estados"
            >
              <Top10States />
            </Card>
            <Card
              className="w-full bg-[#19123c] rounded-2xl"
              title="Top 10 - Idades"
            >
              <Top10Ages />
            </Card>
          </div>
          <div className="flex space-x-8">
            <Card className="w-full bg-[#19123c] rounded-2xl" title="Sexo">
              <GenderChart />
            </Card>
            <Card
              className="w-full bg-[#19123c] rounded-2xl"
              title="Dispositivo"
            >
              <DevicesChart />
            </Card>
          </div>
          <div className="flex space-x-8">
            <Card
              className="w-full bg-[#19123c] rounded-2xl"
              title="Sistemas Operacionais - Mobile"
            >
              <OSChart />
            </Card>
            <Card
              className="w-full bg-[#19123c] rounded-2xl"
              title="Top 5 - Cupons"
            >
              <div className="mt-8">
                <LowStockItem />
              </div>
            </Card>
          </div>
        </section>
        <Resources />
      </div>
    </div>
  );
}

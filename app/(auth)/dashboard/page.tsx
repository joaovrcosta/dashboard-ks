"use client";

import { useDashboardStore } from "@/app/_stores/dateFilter";
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
  const { selectedDate, data, setSelectedDate } = useDashboardStore();

  console.log(data);

  console.log(selectedDate);

  return (
    <div className="flex items-center justify-center mb-24">
      <div className="xl:px-8 md:px-8 lg:px-8 px-4 max-w-[1720px] w-full">
        <DataFilter
          selectedDate={selectedDate}
          onDateChange={(newDate) => setSelectedDate(newDate)}
        />

        <Card
          className="bg-[#19123C] rounded-2xl p-4 lg:hidden xl:hidden md:hidden block"
          title="Faturamento"
        >
          <div className="space-y-8">
            <div>
              <div className="lg:hidden xl:hidden md:hidden block">
                <DashboardCard
                  titles={[
                    {
                      label: "Total Gerado no Mês",
                      value: data.faturamento.totalGerado,
                    },
                    {
                      label: "Projeção do Mês",
                      value: data.faturamento.projecaoMes,
                    },
                  ]}
                  className="bg-card-gradient rounded-3xl"
                />
              </div>
            </div>
            <div className="lg:hidden xl:hidden md:hidden block">
              <DashboardCard
                titles={[
                  {
                    label: "Total Pagos/Mês",
                    value: data.pagamentos.totalPago,
                  },
                  {
                    label: "Projeção do Mês",
                    value: data.pagamentos.projecaoMes,
                  },
                  { label: "Mark Up", value: data.pagamentos.markUp },
                ]}
                className="bg-card-gradient rounded-3xl"
              />
            </div>
            <div className="lg:hidden xl:hidden md:hidden block space-y-5">
              <DashboardCard
                titles={[{ label: "CMV/Pagos/Mês", value: "R$ 150.000,00" }]}
                className="bg-card-gradient rounded-3xl"
              ></DashboardCard>
              <div className="w-full flex space-x-8">
                <DashboardCard
                  titles={[
                    { label: "CMV/Pagos/Mês", value: data.cmv.valorPago },
                  ]}
                  className="bg-card-gradient rounded-3xl"
                />
                <DashboardCard
                  titles={[{ label: "Quantidade", value: data.cmv.quantidade }]}
                  className="bg-card-gradient rounded-3xl"
                />
              </div>
              <DashboardCard
                titles={[
                  { label: "Valor por Item", value: data.cmv.valorPorItem },
                ]}
                className="bg-card-gradient rounded-3xl"
              />
            </div>
          </div>
        </Card>
        {/* Desktop */}
        <div className="space-y-8">
          <div className="flex w-full space-x-8">
            <Card className="lg:block xl:block md:block hidden w-full bg-[#19123c] rounded-2xl">
              <DashboardCard
                titles={[
                  {
                    label: "Total Gerado no Mês",
                    value: data.faturamento.totalGerado,
                  },
                  {
                    label: "Projeção do Mês",
                    value: data.faturamento.projecaoMes,
                  },
                ]}
                className="bg-card-gradient rounded-3xl"
              />
            </Card>
            <Card className="lg:block xl:block md:block hidden w-full bg-[#19123c] rounded-2xl">
              <DashboardCard
                titles={[
                  {
                    label: "Total Pagos/Mês",
                    value: data.pagamentos.totalPago,
                  },
                  { label: "Projeção mês", value: data.pagamentos.projecaoMes },
                  { label: "Mark Up", value: data.pagamentos.markUp },
                ]}
                className="bg-card-gradient rounded-3xl"
              />
            </Card>
          </div>
          <div className="hidden md:flex items-center space-x-8 bg-[#19123c] p-4 rounded-2xl">
            <DashboardCard
              titles={[{ label: "CMV/Pagos/Mês", value: data.cmv.month }]}
              className="bg-card-gradient rounded-3xl w-full"
            />

            <DashboardCard
              titles={[{ label: "Total pedidos", value: data.cmv.quantidade }]}
              className="bg-card-gradient rounded-3xl w-full"
            ></DashboardCard>

            <DashboardCard
              titles={[{ label: "Ticket Médio", value: data.cmv.valorPorItem }]}
              className="bg-card-gradient rounded-3xl w-full"
            ></DashboardCard>

            <DashboardCard
              titles={[
                { label: "Total Recompra", value: data.repurchase?.total },
              ]}
              className="bg-card-gradient rounded-3xl w-full"
            />
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

"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "../card";
import { InfoCard } from "../info-card";

const chartData = [
  { date: "xx/xx/xx", desktop: 24000, mobile: 12000, tablet: 6000 },
  { date: "xx/xx/xx", desktop: 22000, mobile: 14000, tablet: 8000 },
  { date: "xx/xx/xx", desktop: 26000, mobile: 13000, tablet: 7000 },
  { date: "xx/xx/xx", desktop: 26000, mobile: 13000, tablet: 7000 },
  { date: "xx/xx/xx", desktop: 24000, mobile: 12000, tablet: 6000 },
  { date: "xx/xx/xx", desktop: 22000, mobile: 14000, tablet: 8000 },
  { date: "xx/xx/xx", desktop: 26000, mobile: 13000, tablet: 7000 },
  { date: "xx/xx/xx", desktop: 26000, mobile: 13000, tablet: 7000 },
];

export function MultipleChart() {
  return (
    <Card title="Faturamento Diário" className="mt-4 px-2">
      <div className="flex flex-col items-center w-full overflow-x-auto space-y-4">
        <div className="flex w-full mt-4">
          <div className="text-center bg-transparent text-white py-4 px-0 space-y-2 ">
            <p className="text-xs font-normal">Pagos</p>
            <p className="text-xs font-normal">Gerados</p>
          </div>

          <div className="flex items-center justify-around lg:ml-6 xl:ml-6 md:ml-4 ml-11 w-full lg:gap-3 xl:gap-3 md:gap-3 gap-12">
            <InfoCard value_1={"R$16.044,06"} value_2={"R$16.044,06"} />
            <InfoCard value_1={"R$16.044,06"} value_2={"R$16.044,06"} />
            <InfoCard value_1={"R$16.044,06"} value_2={"R$16.044,06"} />
            <InfoCard value_1={"R$16.044,06"} value_2={"R$16.044,06"} />
            <InfoCard value_1={"R$16.044,06"} value_2={"R$16.044,06"} />
            <InfoCard value_1={"R$16.044,06"} value_2={"R$16.044,06"} />
            <InfoCard value_1={"R$16.044,06"} value_2={"R$16.044,06"} />
            <InfoCard value_1={"R$16.044,06"} value_2={"R$16.044,06"} />
          </div>
        </div>

        <div className="bg-transparent rounded-lg w-full min-w-[600px] ml-64 lg:ml-0 xl:ml-0 md:ml-0">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#332a63" />

              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#fff", fontSize: 20 }}
                padding={{ left: 10, right: 10 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#fff", fontSize: 12 }}
                tickFormatter={(value) => value.toLocaleString("en-US")}
              />

              <Tooltip
                cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
                contentStyle={{
                  backgroundColor: "#332a63",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />

              <Bar dataKey="desktop" fill="#00d8ff" radius={[10, 10, 0, 0]} />
              <Bar dataKey="tablet" fill="#ff6b6b" radius={[10, 10, 0, 0]} />
              <Bar dataKey="mobile" fill="#feca57" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center flex-col space-x-2">
              <div className="bg-[#00d8ff] rounded-full h-[20px] w-[20px]"></div>
              <p className="text-white text-sm font-normal">Pagos</p>
            </div>

            <div className="flex flex-col items-center space-x-2">
              <div className="bg-[#ff6b6b] rounded-full h-[20px] w-[20px]"></div>
              <p className="text-white text-sm font-normal">Gerados</p>
            </div>

            <div className="flex items-center flex-col space-x-2">
              <div className="bg-[#feca57] rounded-full h-[20px] w-[20px]"></div>
              <p className="text-white text-sm font-normal">Média</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

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

const chartData = [
  { date: "xx/xx/xx", desktop: 24000, mobile: 12000, tablet: 6000 },
  { date: "xx/xx/xx", desktop: 22000, mobile: 14000, tablet: 8000 },
  { date: "xx/xx/xx", desktop: 26000, mobile: 13000, tablet: 7000 },
];

export function MultipleChart() {
  return (
    <div className="flex justify-center items-center w-full  overflow-x-auto">
      {/* Div com bordas arredondadas, fundo e largura mínima com rolagem */}
      <div className="bg-transparent rounded-lg p-6 w-full min-w-[520px]">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
          >
            {/* Grade com linhas e fundo */}
            <CartesianGrid strokeDasharray="3 3" stroke="#332a63" />

            {/* Eixo X com formatação */}
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#fff", fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
            />

            {/* Eixo Y com valores customizados */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#fff", fontSize: 12 }}
              tickFormatter={(value) => value.toLocaleString("en-US")}
            />

            {/* Tooltip customizado */}
            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
              contentStyle={{
                backgroundColor: "#332a63",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            {/* Barras com cores brilhantes */}
            <Bar dataKey="desktop" fill="#00d8ff" radius={[10, 10, 0, 0]} />
            <Bar dataKey="tablet" fill="#ff6b6b" radius={[10, 10, 0, 0]} />
            <Bar dataKey="mobile" fill="#feca57" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

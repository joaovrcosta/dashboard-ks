"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  male: {
    label: "Visitors",
  },
  chrome: {
    label: "Homem",
    color: "hsl(var(--blue))",
  },
  safari: {
    label: "Mulher",
    color: "hsl(var(--pink))",
  },
} satisfies ChartConfig;

export function GenderChart() {
  return (
    <Card className="flex flex-col bg-transparent border-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-col items-center gap-2 font-medium leading-none w-full text-white text-lg space-y-2 mt-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <p>Mulheres:</p>
            </div>
            <div>
              <p>45%</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <p>Homens:</p>
            </div>
            <div>
              <p>50%</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <p>Não informado:</p>
            </div>
            <div>
              <p>5%</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

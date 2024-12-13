"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "SP", desktop: 100 },
  { month: "MT", desktop: 70 },
  { month: "PB", desktop: 40 },
  { month: "MG", desktop: 32 },
  { month: "MS", desktop: 31 },
  { month: "AM", desktop: 34 },
  { month: "RJ", desktop: 43 },
  { month: "RS", desktop: 31 },
  { month: "CR", desktop: 25 },
  { month: "ST", desktop: 12 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--blue))",
  },
} satisfies ChartConfig;

export function Top10States() {
  return (
    <Card className="bg-transparent border-none p-0">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            barSize={20}
            margin={{
              left: -20,
              right: 30,
            }}
          >
            <XAxis
              type="number"
              dataKey="desktop"
              hide
              className="text-white"
            />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={[10, 10, 10, 10]}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="text-white"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

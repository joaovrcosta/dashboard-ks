"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useDateStore } from "@/app/_stores/dateStore";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--blue))",
  },
} satisfies ChartConfig;

export function Top10Ages() {
  const { data } = useDateStore();

  return (
    <Card className="bg-transparent border-none p-0">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data[0]?.top10Ages}
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

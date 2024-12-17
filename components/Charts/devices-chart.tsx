"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useDateStore } from "@/app/_stores/dateStore";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--pink))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--pink))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--pink))",
  },
} satisfies ChartConfig;

export function DevicesChart() {
  const { data } = useDateStore();

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
              data={data[0]?.devices}
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
              <p>Mobile:</p>
            </div>
            <div>
              <p>100%</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <p>Desktop:</p>
            </div>
            <div>
              <p>0%</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <p>Tablet:</p>
            </div>
            <div>
              <p>0%</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

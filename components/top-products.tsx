import { InfoCard } from "./info-card";
import { ScrollArea } from "./ui/scroll-area";

export function TopProducts() {
  return (
    <ScrollArea className="rounded-md overflow-x-auto">
      <div className="flex space-x-3 whitespace-nowrap min-w-96">
        <InfoCard
          value_1={"nao sei"}
          value_2={"234324"}
          className="w-[132px]"
        />
        <InfoCard
          value_1={"nao sei"}
          value_2={"234324"}
          className="w-[132px]"
        />
        <InfoCard
          value_1={"nao sei"}
          value_2={"234324"}
          className="w-[132px]"
        />
        <InfoCard
          value_1={"nao sei"}
          value_2={"234324"}
          className="w-[132px]"
        />
      </div>
    </ScrollArea>
  );
}

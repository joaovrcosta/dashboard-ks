import { ItemCard } from "./item-card";
import { ScrollArea } from "./ui/scroll-area";

export function LowStockItem() {
  return (
    <ScrollArea className="rounded-md overflow-x-auto">
      <div className="flex space-x-3 whitespace-nowrap min-w-96">
        <ItemCard value_1={"PRODUTO A"} value_2={"90"} className="w-[132px]" />
        <ItemCard value_1={"PRODUTO B"} value_2={"45"} className="w-[132px]" />
        <ItemCard value_1={"PRODUTO C"} value_2={"31"} className="w-[132px]" />
        <ItemCard value_1={"PRODUTO D"} value_2={"28"} className="w-[132px]" />
      </div>
    </ScrollArea>
  );
}

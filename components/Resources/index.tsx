import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { accordionData } from "@/app/_mocks/resources";

export function Resources() {
  return (
    <div className="px-2 mt-3 lg:hidden xl:hidden md:hidden block">
      <Accordion type="single" collapsible className="space-y-3">
        {accordionData.map(({ id, title, icon, content }) => (
          <AccordionItem
            key={id}
            value={id}
            className="bg-[#19123c] border-none px-3 transition-all duration-300 rounded-3xl"
          >
            <AccordionTrigger
              className="rounded-full bg-[#19123c] py-4 px-0 text-white font-medium"
              icon={icon}
            >
              {title}
            </AccordionTrigger>
            <AccordionContent className="bg-[#19123c] transition-all duration-300 rounded-b-lg">
              <div className="p-4 px-2 text-white">{content}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

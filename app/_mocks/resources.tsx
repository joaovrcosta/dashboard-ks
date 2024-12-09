import { DevicesChart } from "@/components/Charts/devices-chart";
import { GenderChart } from "@/components/Charts/gender-chart";
import { OSChart } from "@/components/Charts/os-chart";
import { PaymentTypeChart } from "@/components/Charts/payment-type";
import { Top10Ages } from "@/components/Charts/top-10-ages";
import { Top10States } from "@/components/Charts/top-10-states";
import { FunnelItem } from "@/components/funnel-item";
import { LowStockItem } from "@/components/low-stock-item";
import { RegisterItems } from "@/components/registers-item";
import { ShippingItem } from "@/components/shipping-item";
import { TopProducts } from "@/components/top-products";
import {
  Boxes,
  CreditCard,
  Filter,
  MapPin,
  MonitorSmartphone,
  Package,
  Smartphone,
  Ticket,
  Truck,
  User,
  UserSearch,
  UsersRound,
} from "lucide-react";

export const accordionData = [
  {
    id: "item-1",
    title: "Funil de Vendas",
    icon: <Filter />,
    content: <FunnelItem />,
  },
  {
    id: "item-2",
    title: "Produtos com Estoque Baixo",
    icon: <Package />,
    content: <LowStockItem />,
  },
  {
    id: "item-3",
    title: "Top 10 - Produtos (Faturamento)",
    icon: <Boxes />,
    content: <TopProducts />,
  },
  {
    id: "item-4",
    title: "Frete",
    icon: <Truck />,
    content: <ShippingItem />,
  },
  {
    id: "item-5",
    title: "Cadastros",
    icon: <User />,
    content: <RegisterItems />,
  },
  {
    id: "item-6",
    title: "Tipos de Pagamento",
    icon: <CreditCard />,
    content: <PaymentTypeChart />,
  },
  {
    id: "item-7",
    title: "Top 10 - Estados",
    icon: <MapPin />,
    content: <Top10States />,
  },
  {
    id: "item-8",
    title: "Top 10 - Idades",
    icon: <UsersRound />,
    content: <Top10Ages />,
  },
  {
    id: "item-9",
    title: "Sexo",
    icon: <UserSearch />,
    content: <GenderChart />,
  },
  {
    id: "item-10",
    title: "Dispositivos",
    icon: <Smartphone />,
    content: <DevicesChart />,
  },
  {
    id: "item-11",
    title: "Sistema Operacional - Mobile",
    icon: <MonitorSmartphone />,
    content: <OSChart />,
  },
  {
    id: "item-12",
    title: "Top 5 - Cupom",
    icon: <Ticket />,
    content: <LowStockItem />,
  },
];

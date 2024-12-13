import { create } from "zustand";

export const useDashboardStore = create((set) => ({
  selectedDate: new Date(),

  data: {
    faturamento: { totalGerado: "R$ 0,00", projecaoMes: "R$ 0,00" },
    pagamentos: { totalPago: "R$ 0,00", projecaoMes: "R$ 0,00", markUp: "XX" },
    cmv: { month: "R$ 0,00", quantidade: "0", valorPorItem: "R$ 0,00" },
    repurchase: { total: "0" },
  },

  setSelectedDate: (date: any) =>
    set(() => {
      const updatedData = getMockedDataByDate(date);
      return { selectedDate: date, data: updatedData };
    }),
}));

function getMockedDataByDate(date: any) {
  const month = date.getMonth() + 1;
  return {
    faturamento: {
      totalGerado: `R$ ${(500000 + month * 10000).toLocaleString("pt-BR")},00`,
      projecaoMes: `R$ ${(620000 + month * 15000).toLocaleString("pt-BR")},00`,
    },
    pagamentos: {
      totalPago: `R$ ${(400000 + month * 8000).toLocaleString("pt-BR")},00`,
      projecaoMes: `R$ ${(500000 + month * 12000).toLocaleString("pt-BR")},00`,
      markUp: `${10 + month}%`,
    },
    cmv: {
      month: `R$ ${(150000 + month * 5000).toLocaleString("pt-BR")},00`,
      quantidade: `${1500 + month * 10}`,
      valorPorItem: `R$ ${(266.67 + month * 5).toFixed(2).replace(".", ",")}`,
    },
    repurchase: {
      total: `${350 + month * 5}`,
    },
  };
}

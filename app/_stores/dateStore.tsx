import { create } from "zustand";
import { ProjectionData } from "../_types/projectionTypes";

type State = {
  selectedDate: string;
  data: ProjectionData[]; // Tipagem aplicada aqui
  setDate: (date: string) => void;
  setData: (data: ProjectionData[]) => void;
};

export const useDateStore = create<State>((set) => ({
  selectedDate: "",
  data: [],
  setDate: (date) => set({ selectedDate: date }),
  setData: (data) => set({ data }), // Atualiza os dados na store
}));

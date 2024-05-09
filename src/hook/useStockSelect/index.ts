import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useStockSelectProps = {
  stockCode: number;
  start_time: string;
  changeStockSelect: (newState: number) => void;
};

const useStockSelect = create<useStockSelectProps>()(
  devtools((set) => ({
    stockCode: 2867,
    start_time: "2018-02-01",
    changeStockSelect: (newState) => {
      set(() => ({
        stockCode: newState,
      }));
    },
  }))
);

export default useStockSelect;

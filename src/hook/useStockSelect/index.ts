import { reqGetSuggestedStock } from "@/api_v1";
import { formatSuggestedStock } from "@/app/api/getSuggestedStock/route";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useStockSelectProps = {
  stockCode: number;
  changeStockSelect: (newState: number) => void;
};

const useStockSelect = create<useStockSelectProps>()(
  devtools((set) => ({
    stockCode: 2330,
    changeStockSelect: (newState) => {
      set(() => ({
        stockCode: newState,
      }));
    },
  }))
);

export default useStockSelect;

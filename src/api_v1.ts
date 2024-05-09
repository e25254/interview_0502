import { newHttpInstance } from "./app/api/utils";

export const reqGetStockMonthRevenue = async (
  stockCode: string,
  startDate: string
) => {
  try {
    const parametersArray = [
      `stock_code=${stockCode}`,
      `start_date=${startDate}`,
    ];
    const instance = newHttpInstance(
      "GET",
      `/api/getStockMonthRevenue?${parametersArray.join("&")}`
    );
    const { data } = await instance.request({});
    return data;
  } catch (error: Error | unknown) {
    console.error(error);
  }
};

export const reqGetSuggestedStock = async (queryString: string) => {
  try {
    const instance = newHttpInstance(
      "GET",
      `/api/getSuggestedStock?search_code=${queryString}`
    );
    const { data } = await instance.request({});
    return data;
  } catch (error: Error | unknown) {
    console.error(error);
  }
};

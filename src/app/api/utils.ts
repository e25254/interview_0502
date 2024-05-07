import axios from "axios";

export const newHttpInstance = (
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string
) => {
  let option = {
    method: method,
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8", // 指定編碼為 UTF-8
    },
  };
  const instance = axios.create(option);
  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      console.error(`Fetch something error: ${error}`);
      return Promise.reject(error);
    }
  );
  return instance;
};

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
    const res = await instance.request({});
    return res.data;
  } catch (error: Error | unknown) {
    console.error(error);
  }
};

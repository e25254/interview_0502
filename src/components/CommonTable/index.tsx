import { Stack, Typography } from "@mui/material";
import React from "react";
import "./index.scss";
type CommonTableProps = {
  data: {
    [key: string]: string | number;
  }[];
  isAllBold?: boolean;
};
export default function CommonTable({
  data,
  isAllBold = false,
}: CommonTableProps) {
  const judgeIsBoldText = (columnOrder: number | null = null) =>
    isAllBold || columnOrder === 0;
  return (
    <Stack className="common_table_div">
      <table>
        <tbody>
          {Object.keys(data[0]).map((dataKey, dataKeyIndex) => (
            <tr key={dataKey}>
              {data.map((item) => (
                <td key={`${dataKeyIndex}_${dataKeyIndex}`}>
                  <Typography
                    variant={
                      judgeIsBoldText(dataKeyIndex)
                        ? "table_bold"
                        : "table_common"
                    }
                  >
                    {item[dataKey]}
                  </Typography>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  );
}

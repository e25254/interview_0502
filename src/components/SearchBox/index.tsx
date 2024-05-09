import React, { useState } from "react";
import CommonInput, { CommonInputProps } from "../CommonInput";
import { Collapse, Paper, Stack, Typography } from "@mui/material";
import "./index.scss";
import { formatSuggestedStock } from "@/app/api/getSuggestedStock/route";

type SearchBoxProps = Pick<
  CommonInputProps,
  "inputOnChange" | "inputPlaceholder"
> & {
  searchResult: [];
  searchText: string;
  clearFunction: () => void;
  selectItem: (value: number) => void;
};

export default function SearchBox({
  inputOnChange,
  inputPlaceholder,
  searchResult,
  searchText,
  clearFunction,
  selectItem,
}: SearchBoxProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isSuggestedCollapseOpen, setIsSuggestedCollapseOpen] =
    useState<boolean>(false);

  const handleHighlightText = (
    originalText: string,
    searchText: string
  ): string => {
    if (!searchText) return "";
    let tempText = originalText;
    let startIndex = originalText.indexOf(searchText);
    let highlightedText = "";

    while (startIndex !== -1) {
      let endIndex = startIndex + searchText.length;
      if (startIndex > 0) {
        highlightedText += `${tempText.substring(0, startIndex)}<span>${tempText.substring(startIndex, endIndex)}</span>`;
      } else {
        highlightedText += `<span>${tempText.substring(startIndex, endIndex)}</span>`;
      }

      tempText = tempText.substring(endIndex);
      startIndex = tempText.indexOf(searchText);
    }
    highlightedText += tempText;
    return `${highlightedText}`;
  };

  return (
    <Stack className="search_box_div">
      <CommonInput
        inputOnChange={inputOnChange}
        inputPlaceholder={inputPlaceholder}
        inputOnFocus={() =>
          setTimeout(() => setIsSuggestedCollapseOpen(true), 200)
        }
        inputOnBlur={() =>
          setTimeout(() => setIsSuggestedCollapseOpen(false), 500)
        }
        {...{ inputValue, setInputValue }}
      />
      <Collapse
        className="result_collapse"
        in={searchResult.length > 0 && isSuggestedCollapseOpen}
      >
        <Paper className="result_item_group">
          <Stack className="result_item result_title">
            <Typography variant="body1">查詢個股</Typography>
          </Stack>
          {searchResult.map((resultItem: formatSuggestedStock) => (
            <Stack
              className="result_item"
              key={resultItem.stock_code}
              onClick={() => {
                selectItem(parseInt(resultItem.stock_code));
                clearFunction();
                setInputValue("");
              }}
            >
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: handleHighlightText(
                    resultItem.display_name,
                    searchText
                  ),
                }}
              ></Typography>
            </Stack>
          ))}
        </Paper>
      </Collapse>
    </Stack>
  );
}

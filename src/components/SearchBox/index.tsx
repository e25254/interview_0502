import React, { useEffect, useState } from "react";
import CommonInput, { CommonInputProps } from "../CommonInput";
import { Collapse, Paper, Stack, Typography } from "@mui/material";
import "./index.scss";
import { formatSuggestedStock } from "@/app/api/getSuggestedStock/route";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "@/hook/useDebounce";
import { reqGetSuggestedStock } from "@/api_v1";

type SearchBoxProps = Pick<CommonInputProps, "inputPlaceholder"> & {
  selectItem: (value: number) => void;
};

export default function SearchBox({
  inputPlaceholder,

  selectItem,
}: SearchBoxProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<[]>([]);
  const [isSuggestedCollapseOpen, setIsSuggestedCollapseOpen] =
    useState<boolean>(false);

  const { debounceValue, debounceOnChange, clearDebounceValue } = useDebounce();

  const { data: suggestedStock } = useQuery({
    queryKey: ["getSuggestedStock", debounceValue],
    queryFn: ({ queryKey: [_, searchString] }) =>
      reqGetSuggestedStock(searchString),
    gcTime: 0,
  });

  const handleHighlightText = (
    originalText: string,
    debounceValue: string
  ): string => {
    if (!debounceValue) return "";
    let tempText = originalText;
    let startIndex = originalText.indexOf(debounceValue);
    let highlightedText = "";

    while (startIndex !== -1) {
      let endIndex = startIndex + debounceValue.length;
      if (startIndex > 0) {
        highlightedText += `${tempText.substring(0, startIndex)}<span>${tempText.substring(startIndex, endIndex)}</span>`;
      } else {
        highlightedText += `<span>${tempText.substring(startIndex, endIndex)}</span>`;
      }

      tempText = tempText.substring(endIndex);
      startIndex = tempText.indexOf(debounceValue);
    }
    highlightedText += tempText;
    return `${highlightedText}`;
  };

  const clearSearchResult = () => {
    clearDebounceValue();
    setSearchResult([]);
  };

  useEffect(() => {
    if (!suggestedStock) return;
    setSearchResult(suggestedStock);
  }, [suggestedStock]);

  return (
    <Stack className="search_box_div">
      <CommonInput
        inputOnChange={debounceOnChange}
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
                clearSearchResult();
                setInputValue("");
              }}
            >
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: handleHighlightText(
                    resultItem.display_name,
                    debounceValue
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

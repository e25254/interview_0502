import React, { useCallback, useEffect, useState } from "react";

export default function useDebounce(debounceTime?: number) {
  const [inputValue, setInputValue] = useState<string>("");
  const [debounceValue, setDebounceValue] = useState<string>("");
  const debounceOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setInputValue(event.target.value),
    []
  );

  const clearDebounceValue = () => setDebounceValue("");

  useEffect(() => {
    const debounceTimeOut = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);
    return () => clearTimeout(debounceTimeOut);
  }, [inputValue, debounceTime]);
  return { debounceValue, debounceOnChange, clearDebounceValue };
}

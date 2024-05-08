import React, { useEffect, useState } from "react";

export default function useDebounce(debounceTime: number) {
  const [inputValue, setInputValue] = useState<string>("");
  const [debounceValue, setDebounceValue] = useState<string>("");
  const debounceOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);
  useEffect(() => {
    const debounceTimeOut = setTimeout(() => {
      setDebounceValue(inputValue);
    }, debounceTime);
    return () => clearTimeout(debounceTimeOut);
  }, [inputValue, debounceTime]);
  return { debounceValue, debounceOnChange };
}

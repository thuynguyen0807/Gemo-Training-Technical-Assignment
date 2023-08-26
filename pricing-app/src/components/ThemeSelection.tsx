"use client";
import React from "react";
import { useTheme } from "next-themes";
import SelectionBox from "./selectionBox";
import { themeColorOptions } from "@/mock/data";

const ThemeSelection = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(setTheme);

  return (
    <>
      <SelectionBox
        value={themeColorOptions?.find((v) => v?.value === currentTheme)}
        isMulti={false}
        onChange={(data) => {
          setTheme(data?.value);
        }}
        options={themeColorOptions}
      />
    </>
  );
};

export default ThemeSelection;

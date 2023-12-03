"use client";
import React, { useLayoutEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useThemeContext } from "../../context/ThemeContext";

function ThemeSwitch({}) {
  const { theme, toggleTheme } = useThemeContext()!;
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white dark:bg-gray-900 w-[3rem] h-[3rem] rounded-full flex justify-center items-center border-opacity-40 shadow-2xl bg-opacity-80 backdrop-blur-[0.5rem] border border-white hover:scale-[1.15] active:scale-105 focus:scale-110 transition-all"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}

export default ThemeSwitch;

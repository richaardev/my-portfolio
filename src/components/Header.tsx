"use client";

import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs"

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <header className="box-border fixed w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
      <div className="flex items-center justify-between h-16 max-w-5xl px-4 mx-auto md:px-16">
        <div className="">
          <span className="text-xl font-semibold select-none">richaardev</span>
        </div>
        <div>
          <label className="block overflow-hidden border-2 rounded-md cursor-pointer w-9 h-9 border-zinc-200 dark:border-zinc-800">
            <input
              className="hidden peer"
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <div className="flex items-center justify-around aspect-[1/2] flex-col w-full transition-transform duration-500 peer-checked:translate-y-[-50%] dark:text-zinc-100 dark:bg-zinc-900">
              <BsSunFill size={14} />
              <BsFillMoonFill size={14} />
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

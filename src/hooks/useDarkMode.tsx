"use client";

import { useEffect, useState } from "react";

export function useDarkMode(): [boolean, Function] {
  const [enabledState, setEnabledState] = useState(() => {
    const localState = localStorage.getItem("dark-mode");
    if (localState !== null) return localState === "true";

    // dark default
    return window.matchMedia("(prefers-color-scheme: dark)").matches ?? true;
  });

  const _setEnabledState = (state: boolean) => {
    setEnabledState(state);
    console.log("change state");
    const element = window.document.querySelector("html")!;
    console.log(state);
    if (state) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    const html = window.document.querySelector("html")!;
    localStorage.setItem("dark-mode", String(enabledState));

    if (enabledState) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [enabledState]);

  return [enabledState, _setEnabledState];
}

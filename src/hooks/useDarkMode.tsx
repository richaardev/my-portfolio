import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(): [boolean, Function] {
  if (typeof window == "undefined") return [false, () => {}];

  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // if not exists in local storage
  const enabled = typeof enabledState !== "undefined" ? Boolean(enabledState) : prefersDarkMode;

  useEffect(() => {
    const className = "dark";
    const element = window.document.querySelector("html")!;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabledState, enabled]);
  return [enabled, setEnabledState];
}

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeContext } from "./theme-context";
import {
  DEFAULT_THEME,
  THEMES,
  THEME_STORAGE_KEY,
  type Theme,
} from "./theme.constants";

function isTheme(value: string): value is Theme {
  return THEMES.includes(value as Theme);
}

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme && isTheme(savedTheme)) {
    return savedTheme;
  }

  return DEFAULT_THEME;
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      themes: THEMES,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

import { createContext } from "react";
import { DEFAULT_THEME, type Theme } from "./theme.constants";

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (nextTheme: Theme) => void;
  themes: readonly Theme[];
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const THEME_CONTEXT_DEFAULTS = {
  theme: DEFAULT_THEME,
};

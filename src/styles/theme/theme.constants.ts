export const THEMES = ["brand"] as const;

export type Theme = (typeof THEMES)[number];

export const DEFAULT_THEME: Theme = "brand";
export const THEME_STORAGE_KEY = "app-theme";

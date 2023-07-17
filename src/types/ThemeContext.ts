import { ReactNode } from "react";

export type ThemeContextType = {
  theme: string;
  changeTheme: () => void;
};

export type ThemeState = string;

export type BaseLayoutProps = {
  children?: ReactNode;
};

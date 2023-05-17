import { createContext, useContext } from "react";

export interface IThemeContext {
    themeName: 'light' | 'dark';
    toogleTheme: () => void; //alternaTema
}

export const ThemeContext = createContext<IThemeContext>(null!);

export const useThemeContext = () => useContext(ThemeContext);

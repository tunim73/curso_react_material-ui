import { createContext, useContext } from 'react';

export interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

export const DrawerContext = createContext<IDrawerContextData>(
  {} as IDrawerContextData
);

export const useDrawerContext = () => useContext(DrawerContext);

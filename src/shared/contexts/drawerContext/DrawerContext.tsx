import { createContext, useContext } from 'react';
import { IDrawerOptionsData } from '../../../types';

export interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptionsData[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newList: IDrawerOptionsData[]) => void;
}

export const DrawerContext = createContext<IDrawerContextData>(
  {} as IDrawerContextData
);

export const useDrawerContext = () => useContext(DrawerContext);

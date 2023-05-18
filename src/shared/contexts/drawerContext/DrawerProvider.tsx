import { useCallback, useState } from 'react';
import { IChildren } from '../../../types/IChildren';
import { DrawerContext } from './DrawerContext';

export const AppDrawerProvider = ({ children }: IChildren) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerState) => !oldDrawerState);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

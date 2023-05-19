import { useCallback, useState } from 'react';
import { IChildren } from 'types';
import { DrawerContext } from './DrawerContext';
import { IDrawerOptionsData } from 'types';

export const AppDrawerProvider = ({ children }: IChildren) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptionsData[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerState) => !oldDrawerState);
  }, []);

  const hendleSetDrawerOptions = useCallback(
    (newListOptions: IDrawerOptionsData[]) => {
      setDrawerOptions(newListOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: hendleSetDrawerOptions,
      }}>
      {children}
    </DrawerContext.Provider>
  );
};

/*
  O DrawerOptions foi criado para que o contexto ficasse responsável 
  por carregar as opções do menu e, com isso, eu poder chamar listMenu 
  de Data num lugar melhor e não ficar preso de chamar sempre 
  no pai do componente list-item-link-menu, que nesse caso é o menu Lateral.

  Opnião: Sinceramente, entendi a ideia, achei interessante, mas to criando 
  um state (aqui mesmo) e um useEfect (em AppProvider ou no primeiro arquivo 
  chamado pós raiz) a mais, talvez eu pudesse inicializar esse litMenu 
  aqui no context mesmo. 
*/

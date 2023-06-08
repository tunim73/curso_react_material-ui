import { BarraFerramentas } from 'shared/components';
import { BasePageLayout } from 'shared/layouts';

export const Dashboard = () => {
  return (
    <BasePageLayout title="Dashboard" toolBar={<BarraFerramentas mostrarInputDeBusca/>}>
      Teste
    </BasePageLayout>
  );
};

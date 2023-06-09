import { FerramentaDetalhes, FerramentasListagem } from 'shared/components';
import { BasePageLayout } from 'shared/layouts';

export const Dashboard = () => {
  return (
    <BasePageLayout
      title="Dashboard"
      toolBar={<FerramentaDetalhes mostrarBotaoSalvarEFechar ></FerramentaDetalhes> }>
      Teste
    </BasePageLayout>
  );
};

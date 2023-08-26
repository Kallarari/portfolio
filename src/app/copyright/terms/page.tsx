import React from "react";
import styles from "./styles.module.css";

const terms: React.FC = () => {
  return (
    <div>
      <h1 className={styles.privacy_title}>1. Termos</h1>
      <h2 className={styles.privacy_body}>
        Ao acessar ao site João Vitor Minosso, concorda
        em cumprir estes termos de serviço, todas as leis e regulamentos
        aplicáveis e concorda que é responsável pelo cumprimento de todas as
        leis locais aplicáveis. Se você não concordar com algum desses termos,
        está proibido de usar ou acessar este site. Os materiais contidos neste
        site são protegidos pelas leis de direitos autorais e marcas comerciais
        aplicáveis.
      </h2>

      <h1 className={styles.privacy_title}>2. Uso de Licença</h1>
      <h2 className={styles.privacy_body}>
        É concedida permissão para baixar temporariamente uma cópia dos
        materiais (informações ou software) no site João Vitor Minosso, apenas para visualização transitória pessoal e
        não comercial. Esta é a concessão de uma licença, não uma transferência
        de título e, sob esta licença, você não pode: modificar ou copiar os
        materiais; usar os materiais para qualquer finalidade comercial ou para
        exibição pública (comercial ou não comercial); tentar descompilar ou
        fazer engenharia reversa de qualquer software contido no site Gustavo
        Ferreira - Desenvolvedor Full Stack; remover quaisquer direitos autorais
        ou outras notações de propriedade dos materiais; ou transferir os
        materiais para outra pessoa ou {'"'}espelhe{'"'} os materiais em qualquer outro
        servidor. Esta licença será automaticamente rescindida se você violar
        alguma dessas restrições e poderá ser rescindida por João Vitor Minosso a qualquer momento. Ao encerrar a visualização
        desses materiais ou após o término desta licença, você deve apagar todos
        os materiais baixados em sua posse, seja em formato eletrónico ou
        impresso.
      </h2>
      <h1 className={styles.privacy_title}>3. Isenção de responsabilidade</h1>
      <h2 className={styles.privacy_body}>
        Os materiais no site da João Vitor Minosso são
        fornecidos {'"'}como estão{'"'}. João Vitor Minosso não
        oferece garantias, expressas ou implícitas, e, por este meio, isenta e
        nega todas as outras garantias, incluindo, sem limitação, garantias
        implícitas ou condições de comercialização, adequação a um fim
        específico ou não violação de propriedade intelectual ou outra violação
        de direitos. Além disso, o João Vitor Minosso
        não garante ou faz qualquer representação relativa à precisão, aos
        resultados prováveis ou à confiabilidade do uso dos materiais em seu
        site ou de outra forma relacionado a esses materiais ou em sites
        vinculados a este site.
      </h2>
      <h1 className={styles.privacy_title}>4. Limitações</h1>
      <h2 className={styles.privacy_body}>
        Em nenhum caso o João Vitor Minosso ou seus
        fornecedores serão responsáveis por quaisquer danos (incluindo, sem
        limitação, danos por perda de dados ou lucro ou devido a interrupção dos
        negócios) decorrentes do uso ou da incapacidade de usar os materiais em
        João Vitor Minosso, mesmo que João Vitor Minosso ou um representante autorizado da Gustavo
        Ferreira - Desenvolvedor Full Stack tenha sido notificado oralmente ou
        por escrito da possibilidade de tais danos. Como algumas jurisdições não
        permitem limitações em garantias implícitas, ou limitações de
        responsabilidade por danos conseqüentes ou incidentais, essas limitações
        podem não se aplicar a você.
      </h2>
      <h1 className={styles.privacy_title}>5. Precisão dos materiais</h1>
      <h2 className={styles.privacy_body}>
        Os materiais exibidos no site da João Vitor Minosso podem incluir erros técnicos, tipográficos ou fotográficos.
        João Vitor Minosso não garante que qualquer
        material em seu site seja preciso, completo ou atual. João Vitor Minosso pode fazer alterações nos materiais contidos em
        seu site a qualquer momento, sem aviso prévio. No entanto, Gustavo
        Ferreira - Desenvolvedor Full Stack não se compromete a atualizar os
        materiais.{" "}
      </h2>
      <h1 className={styles.privacy_title}>6. Links</h1>
      <h2 className={styles.privacy_body}>
        O João Vitor Minosso não analisou todos os
        sites vinculados ao seu site e não garante a segurança dos links.{" "}
      </h2>
      <h1 className={styles.privacy_title}>Modificações</h1>
      <h2 className={styles.privacy_body}>
        O João Vitor Minosso pode revisar estes termos
        de serviço do site a qualquer momento, sem aviso prévio. Ao usar este
        site, você concorda em ficar vinculado à versão atual desses termos de
        serviço.
      </h2>
      <h1 className={styles.privacy_title}>Lei aplicável</h1>
      <h2 className={styles.privacy_body}>
        Estes termos e condições são regidos e interpretados de acordo com as
        leis do forro de Foz do Iguaçu, Paraná, Brasil e você se submete
        irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou
        localidade.
      </h2>
    </div>
  );
};

export default terms;

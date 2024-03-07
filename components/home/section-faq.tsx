import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TitleSection from "../ui/title-section";

export default function SectionFAQ() {
  return (
    <section id="faq" className="px-4">
      <div className="mx-auto w-full max-w-screen-lg">
        <TitleSection>Perguntas Frequentes</TitleSection>

        <Accordion type="single" collapsible className="w-full my-10">
          {faqs.map((item, idx) => {
            return (
              <AccordionItem
                className="border border-spacing-1 p-3 rounded-lg my-2 shadow-md"
                key={item.trigger + idx}
                value={item.trigger + idx}
              >
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

const faqs = [
  {
    trigger: "Posso fazer minha própria contabilidade ou devo contratar um profissional?",
    content:
      "Contratar um contador é mais sábio. Você evita dores de cabeça com legislação e garante conformidade.",
  },
  {
    trigger: "Qual a importância da contabilidade para pequenas empresas?",
    content:
      "Essencial. Além de cumprir obrigações legais, a contabilidade oferece insights financeiros cruciais para o crescimento do negócio.",
  },
  {
    trigger: "Como posso reduzir minha carga tributária de forma legal?",
    content:
      "Estratégias fiscais inteligentes e planejamento tributário são essenciais. Nos consulte para otimizar seus impostos.",
  },
  {
    trigger: "Quais documentos são necessários para a contabilidade da minha empresa?",
    content:
      "Notas fiscais, comprovantes de despesas, contratos, extratos bancários, entre outros. Mantenha tudo organizado.",
  },
  {
    trigger: "Como a contabilidade pode ajudar no controle financeiro da empresa?",
    content:
      "Registros precisos permitem análise financeira eficiente, identificando áreas de economia e oportunidades de investimento.",
  },
  {
    trigger: "O que acontece se eu não cumprir prazos fiscais?",
    content:
      "Multas e penalidades. Manter-se em dia evita problemas legais e prejuízos financeiros.",
  },
  {
    trigger: "Como a contabilidade pode ajudar na gestão de folha de pagamento?",
    content:
      "Automatização, cálculos precisos e conformidade com leis trabalhistas. Facilita o processo e evita erros.",
  },
  {
    trigger: "É necessário realizar auditorias regularmente?",
    content:
      "Depende do porte da empresa. Grandes empresas geralmente necessitam, enquanto pequenas podem fazê-lo eventualmente para garantir integridade financeira.",
  },
  {
    trigger: "O que é pró-labore e como ele afeta minha empresa?",
    content:
      "Pró-labore é a remuneração do sócio pela sua atuação na empresa. Afeta a carga tributária e deve ser definido com cuidado para evitar problemas fiscais.",
  },
  {
    trigger: "Como a contabilidade pode auxiliar na tomada de decisões estratégicas?",
    content:
      "Registros precisos fornecem dados cruciais para escolhas estratégicas, investimentos e expansões.",
  },
  {
    trigger: "O que é DAS e como calcular?",
    content:
      "O Documento de Arrecadação do Simples Nacional é o imposto unificado para micro e pequenas empresas. O cálculo varia conforme a faixa de faturamento.",
  },
  {
    trigger: "Como funciona a contabilidade para prestadores de serviços?",
    content:
      "Existem particularidades, como o cálculo do ISS. Um contador especializado em serviços pode orientar sobre as melhores práticas.",
  },
  {
    trigger: "Qual a importância do controle de estoque na contabilidade?",
    content:
      "Impacta diretamente nos custos e na apuração do resultado. Manter um controle eficiente evita perdas financeiras.",
  },
  {
    trigger: "Como declarar despesas dedutíveis no Imposto de Renda da empresa?",
    content:
      "É crucial manter documentação comprobatória e entender as regras de dedutibilidade para evitar questionamentos da Receita Federal.",
  },
  {
    trigger: "Como a contabilidade pode ajudar na renegociação de dívidas empresariais?",
    content:
      "Um contador experiente pode fornecer análises financeiras que embasam negociações e ajudam a reorganizar a situação financeira da empresa.",
  },
];

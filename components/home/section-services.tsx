import { HoverEffect } from "@/components/ui/card-hover-effect";
import TitleSection from "../ui/title-section";
import { useState } from "react";
import { Button } from "../ui/button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TbMapDollar, TbTargetArrow } from "react-icons/tb";
import { VscLaw } from "react-icons/vsc";
import { MdCreditScore, MdMailLock, MdOutlineCalculate } from "react-icons/md";
import { BsClipboardData, BsFillAwardFill, BsTransparency } from "react-icons/bs";
import { ImHammer2 } from "react-icons/im";
import { GiLion, GiReceiveMoney } from "react-icons/gi";
import { FaStore } from "react-icons/fa";

export default function SectionServices() {
  const [fullView, setFullView] = useState(false);

  function handleSwitchFullView() {
    !fullView ? setFullView(true) : setFullView(false);
  }

  const projects = [
    {
      title: "Planejamento tributário",
      description:
        "Organize e estruture as atividades financeiras e comerciais de uma empresa, com o objetivo de reduzir a carga tributária de forma legal.",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: TbMapDollar,
    },
    {
      title: "Foco no que é importante",
      description:
        "Obtenha uma avaliação de custos, de desempenho financeiro e acompanhe o fluxo de caixa mais de perto.",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: TbTargetArrow,
    },
    {
      title: "Atenção com a legislação trabalhista",
      description:
        "Tenha assessoria mais próxima e atualizada sobre a situação da folha de pagamento dos colaboradores e outros documentos que envolvem as relações trabalhistas da companhia.",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: VscLaw,
    },
    {
      title: "Segurança de dados confidenciais",
      description:
        "Mantenha os dados do seu negócio protegidos e organizados, essencialmente sobre os cadastros trabalhistas e suas apurações fiscais.",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: MdMailLock,
    },
    {
      title: "Transparência na contabilidade",
      description: "Mapeie e tenha acesso rápido a cada movimentação financeira do seu negócio.",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: BsTransparency,
    },
    {
      title: "Economia de recursos",
      description:
        "Evite despesas com a contratação e manutenção de colaboradores que podem afetar a saúde financeira do negócio.",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: BsClipboardData,
    },
    {
      title: "Contabilidade completa",
      description:
        "Registro das movimentações financeiras e relatórios: balanços, balancetes, demonstração de resultado, fluxo de caixa, entrega de declarações",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: MdOutlineCalculate,
    },
    {
      title: "Obrigações tributárias",
      description:
        "Apuração e declaração de impostos, emissão de guias, recolhimentos e parcelamentos",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: ImHammer2,
    },
    {
      title: "Folha de pagamento",
      description:
        "Registro admissão/rescisão, emissão de guias e recolhimentos de encargos, controle de férias, cálculo e emissão de recibos",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: GiReceiveMoney,
    },
    {
      title: "Declaração de imposto de renda PF",
      description: "Regularização de CPF Cálculo de imposto mensal obrigatório, carnê leão",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: GiLion,
    },
    {
      title: "Legalização de empresa",
      description:
        "Abertura e registros nos órgãos: Junta Comercial, Fazenda Federal, Prefeitura, Estadual e Municipal, Contrato Social, Alvará",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: BsFillAwardFill,
    },
    {
      title: "MEI - Microempreendedor Individual",
      description:
        "Microempreendedor(a) Individual (MEI) MEI Caminhoneiro (a); Parcelamento de Débitos do -MEI; Cadastro para emissão de Nota Fiscal;",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: FaStore,
    },
    {
      title: "Recuperação de créditos tributários",
      description:
        "Produtos com tributação de PIS e COFINS, análise para verificação de economia tributária",
      link: "https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0",
      svg: MdCreditScore,
    },
  ];

  return (
    <section id="services" className="px-4 w-full bg-[#030b3c] text-zinc-300">
      <div className="mx-auto w-full max-w-screen-lg">
        <TitleSection>Nossos Serviços</TitleSection>

        <TextGenerateEffect
          words=" A única maneira de fazer um excelente trabalho é amar o que você faz – Steve Jobs"
          threshold={0.1}
          className="text-md text-center font-bold italic"
        />

        <div className="w-full max-w-screen-lg mx-auto">
          {fullView ? (
            <HoverEffect items={projects} />
          ) : (
            <HoverEffect items={projects.slice(0, Math.floor(projects.length / 2))} />
          )}
        </div>

        <div className="py-10">
          <Button
            variant="link"
            className="mx-auto block bg-transparent text-zinc-100"
            onClick={handleSwitchFullView}
          >
            {fullView ? "Ver Menos" : "Ver Mais"}
          </Button>
        </div>
      </div>
    </section>
  );
}

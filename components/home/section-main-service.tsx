import ContactButton from "../ui/contact-button";

export default function SectionMainService() {
  return (
    <section className="pb-20">
      <div className="py-32 mb-20 w-full bg-image-main-service">
        <div className="px-4 mx-auto w-full max-w-screen-lg">
          <h3 className="text-xl text-zinc-300 text-center font-bold">
            Você, da área da agricultura, já ouviu falar em
          </h3>

          <h2 className="text-5xl text-zinc-100 font-bold text-center mt-4 mb-10">
            Contabilidade Agrícola?
          </h2>

          <p className="md:text-center text-lg text-zinc-300">
            A contabilidade agrícola é um campo especializado que se concentra na{" "}
            <strong className="text-zinc-50">gestão financeira</strong> e contábil de operações
            relacionadas à agricultura. Isso abrange fazendas, propriedades rurais, cooperativas e
            outras organizações agrícolas. A{" "}
            <strong className="text-zinc-50">contabilidade agrícola</strong> engloba a{" "}
            <strong className="text-zinc-50">
              coleta, registro, análise, interpretação e relato de informações financeiras
            </strong>{" "}
            ligadas às atividades operacionais e administrativas dessas entidades,{" "}
            <strong className="text-zinc-50">fornecendo</strong> uma{" "}
            <strong className="text-zinc-50">visão clara</strong> e{" "}
            <strong className="text-zinc-50">estratégica</strong> para a{" "}
            <strong className="text-zinc-50">tomada de decisões</strong> no campo agrícola.
          </p>
        </div>
      </div>

      <div className="px-4 mx-auto w-full max-w-screen-lg">
        <div className="text-xl text-center text-zinc-600 flex flex-col justify-center items-center gap-3">
          <div>Precisa fazer alteração dos dados cadastrais da sua empresa?</div>
          <div>Abrir uma empresa?</div>
          <div> Encerrar as atividades de uma empresa?</div>
        </div>

        <h1 className="text-4xl text-[#122a4c] text-center font-bold py-4">
          Entenda como funciona a abertura de empresa
        </h1>

        <h3 className="text-xl text-zinc-600 text-center mb-4">Conheça o passo a passo</h3>

        <div className="w-full flex justify-center py-4">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

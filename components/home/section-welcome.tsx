import Image from "next/image";
import WelcomeImage from "@/public/pexels-yan-krukau-7691691.jpg";

export default function SectionWelcome() {
  return (
    <section id="welcome" className="px-4 py-20">
      <div className="mx-auto w-full max-w-screen-lg flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-5">
        <Image
          src={WelcomeImage}
          alt="shanking hands image"
          className="w-full md:max-w-[50%] rounded-lg"
        />

        <div className="w-full md:max-w-[50%]">
          <h2 className="text-3xl font-extralight mb-4">
            Boas-vindas à Contabilidade Fictícia & Associados - Sua Parceria Estratégica!
          </h2>

          <p className="opacity-60 md:text-justify mb-4">
            A maestria do contador transcende simples cálculos e relatórios financeiros. Envolve um{" "}
            <strong>compromisso com a ética, integridade e um olhar atento aos detalhes</strong>. O
            contador é um <strong>pensador crítico</strong>, um decifrador de informações,
            capacitado a{" "}
            <strong>oferecer orientações perspicazes para decisões financeiras cruciais</strong>.
            Além disso, atua como um <strong>estrategista habilidoso</strong>, meticulosamente
            planejando a <strong>gestão de recursos</strong> para{" "}
            <strong>otimizar resultados</strong>, propiciando o{" "}
            <strong>crescimento consistente</strong> dos empreendimentos. Enquanto o filósofo busca
            verdade e sabedoria, <strong>o contador busca precisão e clareza</strong> nas
            informações financeiras, iluminando o cenário empresarial com sua arte contábil.
          </p>
        </div>
      </div>
    </section>
  );
}

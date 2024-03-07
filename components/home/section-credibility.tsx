import Logo from "@/public/navbar-logo.png";
import Image from "next/image";
import React from "react";
import IncrementNumberAnimation from "../ui/increment-number-animation";
import ContactButton from "../ui/contact-button";

export default function SectionCredibility() {
  return (
    <section id="credibility" className="px-4 w-full bg-[#030b3c] text-zinc-100">
      <div className="mx-auto w-full max-w-screen-lg">
        <div className="w-full text-center py-20 flex flex-col justify-center items-center gap-10">
          <div>
            <Image className="w-full max-w-32" src={Logo} alt="Logo" priority={false} />
          </div>

          <div className="w-full relative flex justify-center items-center">
            <span className="p-[.6px] w-full max-w-16 bg-zinc-100" />

            <span className="text-xl sm:text-3xl font-bold text-zinc-100 px-5 uppercase">
              Nossa Garantia
            </span>
            <span className="p-[.6px] w-full max-w-16 bg-zinc-100" />
          </div>

          <div className="text-2xl font-semibold text-[#d6b55b] flex flex-col justify-center items-center gap-1">
            <span>é que com a sua contabilidade em dia</span>
            <span>você focará no que realmente importa</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-10">
            <span className="text-3xl sm:text-6xl text-zinc-100 font-bold uppercase">
              O seu negócio!
            </span>
            <div className="w-full flex justify-center items-center gap-5">
              <span className="p-[.6px] w-full max-w-20 bg-zinc-100"></span>
              <span className="w-2 h-2 bg-zinc-100"></span>
              <span className="p-[.6px] w-full max-w-20 bg-zinc-100"></span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3">
          <DataCard number={150} content="Empresas totalmente recuperadas" />
          <DataCard number={500} content="Empresas acompanhadas em tempo real" />
          <DataCard
            number={8}
            money={{ currency: "R$", level: "Mi" }}
            content="de reais recuperados em tributos"
          />
        </div>

        <div className="mt-14">
          <h2 className="font-bold text-3xl text-center mb-4">
            O que a Contabilidade Fictícia pode fazer pelo meu negócio?
          </h2>

          <p className="text-center text-lg font-light mb-4">
            Deixa a gente te apresentar como existem soluções diferentes que podem auxiliar a
            contabilidade da sua empresa!
          </p>

          <div className="pb-20 mx-auto w-fit">
            <ContactButton className="bg-zinc-100 text-zinc-800 hover:bg-zinc-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DataCard({
  number,
  content,
  money,
}: {
  number: number;
  content: string;
  money?: {
    currency: string;
    level?: "Mi" | "Bi" | "Tri";
  };
}) {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="w-full max-w-96 flex flex-col justify-center items-center gap-3">
        <span className="text-4xl">+de</span>
        <div className="inline-block text-6xl font-bold">
          {money ? (
            <div className="flex justify-center items-center">
              <span className="mr-2">{money.currency}</span>
              <IncrementNumberAnimation duration="3" number={`${number}`} />
              {money.level}
            </div>
          ) : (
            <IncrementNumberAnimation duration="3" number={`${number}`} />
          )}
        </div>
        <span className="text-xl text-center text-zinc-400">{content}</span>
      </div>
    </div>
  );
}

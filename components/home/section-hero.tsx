import Image from "next/image";
import Logo from "@/public/full-dark-logo.png";
import ContactButton from "../ui/contact-button";
import { FaArrowDown } from "react-icons/fa";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Hero() {
  return (
    <div className="bg-image-hero w-full h-screen flex flex-col justify-center items-center gap-8 p-4">
      <Image src={Logo} alt="Logo" className="w-full max-w-[500px]" priority={true} />

      <TextGenerateEffect
        words={"Queremos ajudar a elevar o nível da sua empresa"}
        className="w-full text-lg text-zinc-100 font-extralight text-center"
      />
      <ContactButton className="bg-zinc-100 text-zinc-800 hover:bg-zinc-300" />
      <div className="bottom-10 m-auto animate-bounce absolute">
        <FaArrowDown className="text-white text-2xl" />
      </div>
    </div>
  );
}

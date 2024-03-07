import { FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="px-4 w-full h-64 bg-zinc-800 text-zinc-100 flex flex-col justify-center items-center gap-5 border-t-4 border-zinc-100">
      <div className="w-full flex justify-center items-center gap-4">
        <a
          href="https://www.instagram.com/dager_associados_contadores/"
          target="_blank"
          className="p-1 rounded-full"
        >
          <FaInstagram className="text-3xl hover:text-pink-500" />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0"
          target="_blank"
          className="p-1 rounded-full"
        >
          <FaWhatsapp className="text-3xl hover:text-green-500" />
        </a>
      </div>

      <h2 className="flex flex-col justify-center items-center gap-2 text-center">
        Todos os direitos reservados a Contabilidade Fictícia & Associados
        <FaRegCopyright className="text-xl" />
      </h2>
    </div>
  );
}

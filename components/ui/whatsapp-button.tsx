import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0"
      target="_blank"
      className="p-3 bg-green-500 rounded-full"
    >
      <FaWhatsapp className="text-zinc-100 text-3xl" />
    </a>
  );
}

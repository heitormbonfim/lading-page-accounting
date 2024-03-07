import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactButton({ className }: { className?: string }) {
  return (
    <Button
      variant="default"
      size="lg"
      className={`text-lg rounded-full bg-[#122a4c] text-white hover:bg-[#030b3c] ${className}`}
      asChild
    >
      <a
        href="https://api.whatsapp.com/send/?phone=5588998720814&text&type=phone_number&app_absent=0"
        target="_blank"
        className="gap-2 items-center"
      >
        Contato <FaWhatsapp />
      </a>
    </Button>
  );
}

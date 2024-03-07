import BackToTopButton from "./back-to-top-button";
import WhatsAppButton from "./whatsapp-button";

export default function BottomButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-20 w-full max-w-10 flex flex-col justify-center items-center gap-2">
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}

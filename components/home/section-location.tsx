import TitleSection from "../ui/title-section";

export default function SectionLocation() {
  return (
    <section className="px-4 pb-20 w-full bg-[#030b3c] text-zinc-100">
      <TitleSection>Localização</TitleSection>

      <div className="mx-auto w-full max-w-screen-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391569.0214169442!2d116.06711402696735!3d39.9384150499126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C%20China!5e0!3m2!1sen!2sbr!4v1709832102137!5m2!1sen!2sbr"
          width="600"
          height="450"
          className="border-none rounded-lg mb-20 w-full min-h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ul className="mx-auto mb-20 w-full max-w-xl text-lg flex flex-col gap-2 p-4 bg-white text-zinc-900 rounded-lg shadow-md">
        <li className="pb-2 text-center text-lg font-bold text-zinc-500">Localizações</li>
        <li className="border-b border-gray-300 pb-2 flex justify-between items-center gap-2">
          <span>Ubajara - CE</span>
          <span className="text-xs text-zinc-500">Matriz</span>
        </li>
        <li className="border-b border-gray-300 pb-2 flex justify-between items-center gap-2">
          <span>São Benedito - CE</span>
          <span className="text-xs text-zinc-500">Filial I</span>
        </li>
        <li className="flex justify-between items-center gap-2">
          <span>Tianguá - CE</span>
          <span className="text-xs text-zinc-500">Filial II</span>
        </li>
      </ul>
    </section>
  );
}

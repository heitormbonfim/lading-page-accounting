import Logo from "@/public/pexels-fauxels-3184292.jpg";
import Image from "next/image";

export default function SectionMission() {
  return (
    <section className="px-4 py-20 bg-[#122a4c] text-zinc-100">
      <div className="mx-auto w-full max-w-screen-lg flex flex-col md:flex-row justify-center items-center md:items-start gap-10 my-10 px-4">
        <Image
          className="w-full h-full md:max-w-[50%] rounded-lg"
          src={Logo}
          alt="Logo"
          priority={false}
        />

        <div className="w-full md:max-w-[50%]">
          <h2 className="text-3xl font-bold">Nossa Missão</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ab sint repellendus
            voluptatum officia ipsum esse assumenda veniam debitis dicta, consequatur fugit facilis
            reiciendis velit maiores id repudiandae! Hic, nulla. Veritatis delectus possimus
            expedita soluta obcaecati temporibus facilis quidem eaque! Ipsa, delectus non. Vero ipsa
            consequuntur laudantium ullam consectetur ea eius quod neque ducimus quia, praesentium,
            inventore expedita unde et?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, culpa. Sequi iusto
            quod repellendus vero blanditiis eaque odio distinctio qui beatae nobis sunt eveniet
            odit laudantium, perferendis quam quae praesentium?
          </p>
        </div>
      </div>
    </section>
  );
}

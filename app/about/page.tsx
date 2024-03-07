"use client";

import SectionHistory from "@/components/about/section-history";
import SectionMission from "@/components/about/section-mission";
import Footer from "@/components/home/footer";
import BottomButtons from "@/components/ui/bottom-buttons";
import Navbar from "@/components/ui/navbar";
import RevealOnScroll from "@/components/ui/reveal-on-scroll";

export default function About() {
  return (
    <main className="w-full">
      <Navbar isOnTopTrasnparent={true} />
      <BottomButtons />

      <div className="h-[50vh] flex justify-center items-center bg-[#122a4c]">
        <h2 className="text-6xl text-center font-bold text-zinc-200">Sobre Nós</h2>
      </div>

      <RevealOnScroll threshold={0.1} duration="300" y={100}>
        <SectionHistory />
      </RevealOnScroll>

      <RevealOnScroll threshold={0.1} duration="300" x={100}>
        <SectionMission />
      </RevealOnScroll>

      <Footer />
    </main>
  );
}

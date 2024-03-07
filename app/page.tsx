"use client";

import React from "react";
import Navbar from "@/components/ui/navbar";
import RevealOnScroll from "@/components/ui/reveal-on-scroll";
import SectionWelcome from "../components/home/section-welcome";
import Hero from "../components/home/section-hero";
import SectionServices from "../components/home/section-services";
import SectionFAQ from "../components/home/section-faq";
import SectionLocation from "../components/home/section-location";
import SectionCredibility from "@/components/home/section-credibility";
import SectionMainService from "@/components/home/section-main-service";
import BottomButtons from "@/components/ui/bottom-buttons";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar isOnTopTrasnparent={true} />

      <BottomButtons />

      <Hero />

      <RevealOnScroll duration="300ms" threshold={0.1} x={-100}>
        <SectionWelcome />
      </RevealOnScroll>

      <RevealOnScroll duration="300ms" threshold={0.1} y={100}>
        <SectionServices />
      </RevealOnScroll>

      <RevealOnScroll duration="300ms" threshold={0.1} x={100}>
        <SectionMainService />
      </RevealOnScroll>

      <RevealOnScroll duration="300ms" threshold={0.1} x={-100}>
        <SectionCredibility />
      </RevealOnScroll>

      <RevealOnScroll duration="300ms" threshold={0.1} x={-100}>
        <SectionFAQ />
      </RevealOnScroll>

      <RevealOnScroll duration="300ms" threshold={0.1} y={100}>
        <SectionLocation />
      </RevealOnScroll>

      <Footer />
    </main>
  );
}

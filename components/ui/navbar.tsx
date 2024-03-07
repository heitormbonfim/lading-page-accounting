"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/public/navbar-logo.png";
import Image from "next/image";
import { MdOutlineMenuOpen } from "react-icons/md";
import LinkButton from "./link-button";

interface Navbar extends NavbarTransparency {
  navButtons: NavButtons[];
}

interface NavbarTransparency {
  isOnTopTrasnparent: boolean;
  boxShadow: number;
  backgroundTransparency: number;
}

interface NavButtons {
  title: string;
  href: string;
  className?: string;
  _blank: boolean;
}

export default function Navbar({ isOnTopTrasnparent }: { isOnTopTrasnparent: boolean }) {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [backgroundTransparency, setBackgroundTransparency] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }

    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (isOnTopTrasnparent) {
      const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
      };

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
      }
    }
  }, [isOnTopTrasnparent]);

  useEffect(() => {
    if (isOnTopTrasnparent) {
      let backgroundTransparencyVar = clientWindowHeight / 600;

      if (backgroundTransparencyVar < 1) {
        let boxShadowVar = backgroundTransparencyVar * 0.1;
        setBackgroundTransparency(backgroundTransparencyVar);
        setBoxShadow(boxShadowVar);
      }
    }
  }, [clientWindowHeight, isOnTopTrasnparent]);

  const navButtons: NavButtons[] = [
    {
      title: "Home",
      href: "/",
      _blank: false,
    },
    {
      title: "Serviços",
      href: "/#services",
      _blank: false,
    },
    {
      title: "Sobre",
      href: "/about",
      _blank: false,
    },
    {
      title: "Contato",
      href: "#",
      _blank: false,
    },
  ];

  return (
    <>
      {isMobile ? (
        <MobileNavbar
          isOnTopTrasnparent={isOnTopTrasnparent}
          backgroundTransparency={backgroundTransparency}
          boxShadow={boxShadow}
          navButtons={navButtons}
        />
      ) : (
        <Desktop
          isOnTopTrasnparent={isOnTopTrasnparent}
          backgroundTransparency={backgroundTransparency}
          boxShadow={boxShadow}
          navButtons={navButtons}
        />
      )}
    </>
  );
}

function NavbarLogo() {
  return (
    <a href="/" className="w-full max-w-10">
      <Image src={Logo} alt="Logo" priority={true} className="mx-4" />
    </a>
  );
}

function MobileNavbar({
  isOnTopTrasnparent,
  backgroundTransparency,
  boxShadow,
  navButtons,
}: Navbar) {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu(event: React.MouseEvent<any>) {
    event.stopPropagation();

    setShowMenu((prev) => !prev);
  }

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-all ease-in delay-150 ${
        showMenu && "!bg-[#122a4c]"
      }`}
      style={{
        background: isOnTopTrasnparent
          ? `rgba(18, 42, 76, ${backgroundTransparency})`
          : "rgba(18, 42, 76)",
        boxShadow: isOnTopTrasnparent
          ? `rgb(0 0 0 / ${boxShadow}) 0px 0px 10px 10px`
          : "0px 0px 3px 3px #000000aa",
      }}
    >
      <div className="flex justify-between items-center w-full mx-auto py-4 px-2 relative">
        <NavbarLogo />

        <MdOutlineMenuOpen
          size={35}
          className={`text-zinc-100 mx-3 transition-all ease-in delay-150 ${
            showMenu && "rotate-180"
          }`}
          onClick={(event) => handleToggleMenu(event)}
        />
      </div>

      <div
        className={`backdrop-blur-sm bg-[#0002] fixed w-full h-full z-30 transition-transform ease-in delay-150 ${
          !showMenu && "translate-x-full"
        } flex justify-end`}
        onClick={(event) => handleToggleMenu(event)}
      >
        <div
          className="w-[70%] h-full bg-[#122a4c] flex flex-col justify-start gap-2 p-5"
          onClick={(event) => event.stopPropagation()}
        >
          {navButtons.map((button, idx) => {
            return (
              <React.Fragment key={button.title + idx}>
                <LinkButton title={button.title} href={button.href} _blank={button._blank} />
                <hr />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function Desktop({ isOnTopTrasnparent, backgroundTransparency, boxShadow, navButtons }: Navbar) {
  return (
    <nav
      className="fixed top-0 w-full z-30"
      style={{
        background: isOnTopTrasnparent
          ? `rgba(18, 42, 76, ${backgroundTransparency})`
          : "rgba(18, 42, 76)",
        boxShadow: isOnTopTrasnparent
          ? `rgb(0 0 0 / ${boxShadow}) 0px 0px 10px 10px`
          : "0px 0px 3px 3px #000000aa",
      }}
    >
      <div className="md:flex justify-between items-center w-full max-w-[1000px] mx-auto py-4 px-2 hidden">
        <NavbarLogo />

        <div className="flex justify-center items-center gap-3">
          {navButtons.map((button, idx) => {
            return (
              <React.Fragment key={button.title + idx}>
                <LinkButton title={button.title} href={button.href} _blank={button._blank} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

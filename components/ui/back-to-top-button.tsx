import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBoxShadow(boxShadowVar);
      setOpacity(backgroundTransparacyVar);
    }
  }, [clientWindowHeight]);

  return (
    <a
      href="#"
      className="p-3 rounded-full"
      style={{
        background: `rgba(18, 42, 76, ${backgroundTransparacy})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        opacity: opacity,
      }}
    >
      <FaArrowUp className="text-zinc-100 text-3xl" />
    </a>
  );
}

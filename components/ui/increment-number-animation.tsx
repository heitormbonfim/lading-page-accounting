import { useEffect, useRef, useState } from "react";

export default function IncrementNumberAnimation({
  number,
  duration,
}: {
  number: string;
  duration: string;
}) {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current; // Copy ref.current to a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));

    if (!isVisible || start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [isVisible, number, duration]);

  return <div ref={ref}>{parseFloat(count).toLocaleString("pt-BR", { currency: "BRL" })}</div>;
}

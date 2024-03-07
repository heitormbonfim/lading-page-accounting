import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  children,
  threshold,
  duration,
  x,
  y,
}: {
  children: React.ReactNode;
  threshold: number;
  duration: string;
  x?: number;
  y?: number;
}) {
  x = x || 0;
  y = y || 0;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Copy ref.current to a variable

    if (currentRef) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold,
        }
      );

      intersectionObserver.observe(currentRef);

      return () => {
        if (currentRef) {
          intersectionObserver.unobserve(currentRef);
        }
      };
    }
  }, [threshold]);

  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <div
        className={`w-full transform transition ${
          intersecting
            ? "translate-x-0 translate-y-0 opacity-100"
            : `translate-x-${x} translate-y-${y} opacity-0`
        }`}
        style={{
          transitionDuration: duration,
          transform: `translateX(${intersecting ? 0 : x}px) translateY(${intersecting ? 0 : y}px)`,
        }}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
}

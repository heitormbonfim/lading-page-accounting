"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 2, // Default duration
  threshold = 0.5, // Default threshold is 50%
}: {
  words: string;
  className?: string;
  duration?: number;
  threshold?: number;
}) => {
  const [scope, animate] = useAnimate();
  const componentRef = useRef<HTMLDivElement>(null);

  let wordsArray = words.split(" ");

  useEffect(() => {
    const currentRef = componentRef.current; // Copy componentRef.current to a variable

    const options = {
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(
            "span",
            {
              opacity: 1,
            },
            {
              duration,
              delay: stagger(0.2),
            }
          );
          observer.disconnect();
        }
      });
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animate, threshold, duration]); // Add animate, threshold, and duration to the dependency array

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={componentRef}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};

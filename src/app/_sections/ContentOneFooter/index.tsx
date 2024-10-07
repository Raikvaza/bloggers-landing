"use client";

import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { isMobileDevice } from "@/shared/utils/isMobileDevice";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

export const ContentOneFooter = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yDiv1 = useTransform(scrollYProgress, [0, 1], [-200, 100]);

  const yDiv2 = useTransform(scrollYProgress, [0, 1], [0, -450]);

  return (
    <div
      ref={targetRef}
      className="relative z-0 mx-auto -ml-8 mt-2 h-[488px] w-[100dvw] rounded-none bg-bg-primary-inverse px-20 pt-14 md:mx-auto md:-mt-16 md:w-[1120px] md:rounded-[32px] md:px-[223px] md:pb-[169px] md:pt-[129px]"
    >
      {/* Parallax Div 1 */}
      <motion.div
        className="absolute left-5 top-1/2 h-6 w-6 rotate-12 rounded-md bg-bg-accent opacity-70 md:left-28 md:top-56 md:h-[42px] md:w-[42px] md:rounded-[12px]"
        style={{ y: yDiv1 }}
      />
      {/* Parallax Div 2 */}
      <motion.div
        className="absolute bottom-8 left-7 h-12 w-12 rotate-45 rounded-md bg-bg-accent-yellow-secondary opacity-[88%] md:bottom-10 md:left-16 md:h-24 md:w-24 md:rounded-[25px]"
        style={{ y: yDiv2 }}
      />

      <div className="flex flex-col items-stretch justify-start gap-10 md:w-[674px] md:gap-3">
        <Typography
          variant={"caption2"}
          className={cn(
            "text-center text-text-accent-lilac",
            isMobile ? "text-[22px]" : "",
          )}
        >
          Наша миссия
        </Typography>
        <Typography
          variant={"headline2"}
          className="text-center text-bg-primary"
        >
          Предоставить возможность бизнесу и блогерам Казахстана найти друг
          друга всего в два клика
        </Typography>
      </div>
    </div>
  );
};

"use client";

import { Typography } from "@/shared/ui/Typography";
import { BloggerCard } from "@/widgets/BloggerCard";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ContentFooter } from "./_sections/ContentFooter";
import { ContentOne } from "./_sections/ContentOne";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [targetContainerHeight, setTargetContainerHeight] = useState(0);
  const elementHeight = 539;
  const scrollThreshold = 120;

  useEffect(() => {
    if (targetRef.current) {
      setViewportHeight(window.innerHeight);
      setTargetContainerHeight(targetRef.current.offsetHeight);
    }
  }, []);

  const totalScrollableHeight = targetContainerHeight - viewportHeight;

  const scrollYThreshold =
    (scrollThreshold + elementHeight) / totalScrollableHeight;
  // const scrollYExitThreshold = targetContainerHeight - elementHeight - 70;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end"],
  });

  const yPosition = useTransform(
    scrollYProgress,
    [0, scrollYThreshold, 1],
    [0, 120 + 70, targetContainerHeight - elementHeight - 70],
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    console.log("Progress", scrollYProgress),
  );

  return (
    <div className="relative min-h-screen bg-white p-8 pb-0 text-[#171719]">
      <ContentOne />
      {/* Parallax content */}
      <div
        className="relative mx-auto mt-[120px] flex h-[3406px] w-full flex-col items-stretch justify-start md:w-[1120px]"
        ref={targetRef}
      >
        {/* Parallax Image */}
        <motion.div
          className="absolute right-0 hidden h-[539px] w-[563px] md:block"
          style={{
            y: yPosition,
            transform: "translateX( -50%)",
            willChange: "transform",
          }}
        >
          <Image
            src={"/tmp/parallax_cubes.png"}
            alt="parallax cubes"
            height={539}
            width={563}
          />
        </motion.div>

        <div className="self-center rounded-[26px] bg-bg-accent-subduet-active px-6 pb-2 pt-1">
          <Typography variant={"headline3"}>Почему мы?</Typography>
        </div>

        {/* Repeated sections */}
        <div className="mt-3 flex w-full flex-col items-stretch justify-start gap-14 md:mt-[80px] md:h-[680px] md:flex-row md:gap-[157px]">
          <div className="flex w-full flex-col items-stretch justify-center gap-6 text-center md:w-[540px] md:text-start">
            <Typography variant={"headline1"}>
              Мы используем искусственный интеллект
            </Typography>
            <Typography variant={"bodyL"}>
              Рекламодатели или блогеры, предложенные в вашем профиле, будут
              подходить вам с точностью до 99%. Вам останется только выбрать
              подходящего кандидата и начать сотрудничество с помощью всего
              одной кнопки.
            </Typography>
          </div>
          <div
            className={"relative h-[653px] w-[302px] rounded-[36px] bg-white"}
          >
            <Image
              className="z-40"
              src={"/tmp/main_screen.png"}
              alt="main screen"
              fill
            />
          </div>
        </div>

        <div className="relative mt-12 flex w-full flex-col items-stretch justify-start gap-14 md:mt-[200px] md:h-[680px] md:flex-row md:gap-[157px]">
          <div className="flex w-full flex-col items-stretch justify-center gap-6 text-center md:w-[540px] md:text-start">
            <Typography variant={"headline1"}>
              Мы способствуем прозрачности сделки{" "}
            </Typography>
            <Typography variant={"bodyL"}>
              В нашем приложении вы можете заключить договор между сторонами и
              регулировать сделку с помощью официального документа
            </Typography>
          </div>
          <div className="relative flex h-[366.5px] w-full md:h-[733px]">
            <div
              className={
                "absolute right-[92px] h-[326.5px] w-[151px] rounded-[36px] bg-white md:right-[184px] md:h-[653px] md:w-[302px]"
              }
            >
              <Image
                className="z-40"
                src={"/tmp/project_screen_1.png"}
                alt="main screen"
                fill
              />
            </div>
            <div
              className={
                "absolute right-1 top-10 h-[326.5px] w-[151px] rounded-[36px] bg-white md:right-2 md:top-20 md:h-[653px] md:w-[302px]"
              }
            >
              <Image
                className="z-30"
                src={"/tmp/project_screen_2.png"}
                alt="main screen"
                fill
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-stretch justify-start gap-14 md:mt-[200px] md:h-[680px] md:flex-row md:gap-[157px]">
          <div className="flex w-full flex-col items-stretch justify-center gap-6 md:w-[540px]">
            <Typography variant={"headline1"}>
              Мы предлагаем чат с сохранением истории{" "}
            </Typography>
            <Typography variant={"bodyL"}>
              Вам не нужно переходить из мессенджера в мессенджер. Теперь
              чат прямо внутри приложения. Благодаря этому вы не теряете историю
              сделки с партнёром и всегда можете найти нужную информацию
            </Typography>
          </div>
          <div
            className={"relative h-[653px] w-[302px] rounded-[36px] bg-white"}
          >
            <Image
              className="z-40"
              src={"/tmp/project_screen_3.png"}
              alt="main screen"
              fill
            />
          </div>
        </div>
        <div className="relative mt-12 flex w-full flex-col items-stretch justify-start gap-14 md:mt-[200px] md:h-[680px] md:flex-row md:gap-[157px]">
          <div className="flex w-full flex-col items-stretch justify-center gap-6 md:w-[540px]">
            <Typography variant={"headline1"}>
              Мы экономим ваше время{" "}
            </Typography>
            <Typography variant={"bodyL"}>
              Портфолио и проекты создаются за пару кликов. Теперь вся
              необходимая информация, включая статистику блогеров, в одном
              приложении. Вы можете редактировать свой профиль, добавлять новые
              проекты и соцсети
            </Typography>
          </div>
          <div className="relative flex h-[366.5px] w-full md:h-[733px]">
            <div
              className={
                "absolute right-[92px] h-[326.5px] w-[151px] rounded-[36px] bg-white md:right-[184px] md:h-[653px] md:w-[302px]"
              }
            >
              <Image
                className="z-40"
                src={"/tmp/project_screen_2.png"}
                alt="main screen"
                fill
              />
            </div>
            <div
              className={
                "absolute right-1 top-10 h-[326.5px] w-[151px] rounded-[36px] bg-white md:right-2 md:top-20 md:h-[653px] md:w-[302px]"
              }
            >
              <Image
                className="z-30"
                src={"/tmp/project_screen_5.png"}
                alt="main screen"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* bloggers card */}
      <div className="mx-auto mt-[180px] flex flex-col items-stretch justify-between gap-4 sm:mt-[140px] md:mt-[120px] md:h-[658px] md:w-[1120px] md:gap-0">
        <div className="self-center rounded-[26px] bg-bg-accent-subduet-active px-6 pb-2 pt-1">
          <Typography variant={"headline3"}>С нами сотрудничают</Typography>
        </div>
        <div className="z-50 flex w-full flex-col items-center justify-start gap-5 md:flex-row md:items-stretch">
          <BloggerCard color="bg-lilac-600" />
          <BloggerCard color="bg-teal-500" />
          <BloggerCard color="bg-bg-accent-yellow" />
        </div>
      </div>
      <ContentFooter />
    </div>
  );
}

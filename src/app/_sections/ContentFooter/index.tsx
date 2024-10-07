"use client";

import IconAppstore from "@/shared/assets/icons/icon_appstore.svg";
import { Typography } from "@/shared/ui/Typography";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const ContentFooter = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yDiv1 = useTransform(scrollYProgress, [0, 1], [-140, 400]);
  const yDiv2 = useTransform(scrollYProgress, [0, 1], [0, -550]);

  return (
    <>
      <div
        ref={targetRef}
        className="relative mx-auto mt-[120px] flex flex-col items-stretch justify-start gap-4 rounded-[32px] bg-bg-primary-inverse py-8 md:h-[488px] md:w-[1120px] md:flex-row md:gap-0 md:py-[79px] md:pl-[83px] md:pr-[134px]"
      >
        <motion.div
          className="absolute left-10 top-[50%] h-[30px] w-[30px] rotate-12 rounded-[8px] bg-violet-main opacity-70 md:top-[30%]"
          style={{ y: yDiv1 }}
        />
        <motion.div
          className="absolute bottom-[24%] left-[10%] h-10 w-10 -rotate-[30deg] rounded-[6px] bg-bg-accent-yellow-secondary opacity-70 md:left-[35%]"
          style={{ y: yDiv2 }}
        />

        <div className="flex flex-col items-center justify-evenly gap-4 md:w-[662px] md:items-stretch md:gap-0 ">
          <Typography variant={"caption2"} className="text-text-accent-lilac">
            Всего несколько шагов
          </Typography>
          <div className="flex flex-col gap-3 text-center md:text-start">
            <Typography
              variant={"headline2"}
              className="leading-[50.4px] text-white"
            >
              скачайте приложение{" "}
            </Typography>
            <Typography
              variant={"headline2"}
              className="leading-[50.4px] text-white"
            >
              зарегистрируйтесь{" "}
            </Typography>
            <Typography
              variant={"headline2"}
              className="leading-[50.4px] text-white md:pr-24"
            >
              ищите эксклюзивные предложения{" "}
            </Typography>
            <Typography
              variant={"headline2"}
              className="leading-[50.4px] text-white"
            >
              зарабатывайте{" "}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-between">
          <div className="relative h-[180px] w-[180px] self-center rounded-[32px] md:h-[241px] md:w-[241px]">
            <Image
              src={"/tmp/qr_code.png"}
              fill
              className="object-cover"
              alt="qr"
              quality={100}
            />
          </div>
          <div className="h-[80px] w-[280px] self-center">
            <IconAppstore />
          </div>
        </div>
      </div>

      <div className="-mx-8 mt-10 flex w-[100dvw] flex-col items-center justify-center gap-4 pb-10 md:mx-auto md:mt-[131px] md:h-[120px] md:w-[1120px] md:flex-row md:justify-start md:gap-0">
        <div className="flex w-full items-center justify-between px-8">
          <Typography className="text-center text-[26px] font-extrabold">
            In
            <span className="text-[26px] font-extrabold text-purple-500">
              BOOST
            </span>
          </Typography>
          <Typography
            variant={"caption2"}
            className="whitespace-nowrap md:ml-[163px]"
          >
            +7 700 000 99 00
          </Typography>
        </div>
        <Typography variant={"caption2"} className="md:ml-[110px]">
          inboost@kz
        </Typography>
        <div className="flex items-center justify-start gap-16 md:ml-[79px]">
          <Typography variant={"bodyL"}>Instagram</Typography>
          <Typography variant={"bodyL"}>Telegram</Typography>
          <Typography variant={"bodyL"}>Whatsapp</Typography>
        </div>
      </div>
    </>
  );
};

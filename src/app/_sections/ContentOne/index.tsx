import LogoInBoost from "@/shared/assets/icons/logo_in_boost.svg";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import { RegisterForm } from "@/widgets/RegisterForm";
import { SettingsCard } from "@/widgets/SettingsCard";
import Image from "next/image";
import React from "react";

import { ContentOneFooter } from "../ContentOneFooter";

export const ContentOne = () => {
  return (
    <>
      {/* Header */}
      <div className="flex w-full items-center justify-center md:mb-[162px]">
        <div className="flex items-stretch justify-start gap-[2px]">
          <LogoInBoost />
          <Typography className="self-center !text-center !text-[26px] !font-extrabold">
            In
            <span className="text-[26px] font-extrabold text-purple-500">
              BOOST
            </span>
          </Typography>
        </div>
      </div>
      {/* Content_1 */}
      <div className="relative z-50 mx-auto md:h-[640px] md:w-[1120px]">
        <div className="absolute right-0 top-64 z-0 h-[170px] w-[383px] md:-right-[124px] md:bottom-[65px] md:h-[339px] md:w-[765px]">
          <Image alt="cubes" src={"/tmp/cubes.png"} fill quality={100} />
        </div>
        <div className="-mx-6 flex flex-col items-stretch justify-start gap-[6px] pt-[69px] md:-mx-0 md:w-[789px]">
          <Typography
            variant={"headline1"}
            className="text-center md:text-start"
          >
            Новая{" "}
            <span className="rounded-[26px] bg-bg-accent-subduet-active px-5 text-center md:text-start">
              платформа
            </span>{" "}
            для
          </Typography>
          <Typography
            variant={"headline1"}
            className="text-center md:text-start"
          >
            блогеров и бизнеса
          </Typography>
          <Typography
            variant={"headline1"}
            className="text-center md:text-start"
          >
            в Казахстане
          </Typography>
        </div>
        <Typography variant={"bodyL"} className="mt-3 md:w-[478px]">
          <span className="text-[24px] font-semibold leading-[33.6px]">
            BOOST
          </span>
          аните свой бизнес — просто размещайте свои проекты и визитки в нашем
          приложении, а дальше мы сделаем все за вас
        </Typography>
        <RegisterForm>
          <Button variant={"secondary"} className="mt-10 w-full md:w-[223px]">
            Узнать больше
          </Button>
        </RegisterForm>
        <div className="z-50 mt-10 flex flex-col items-center justify-center md:absolute md:bottom-0 md:right-[57px] md:mt-0">
          <SettingsCard />
        </div>
      </div>
      {/* Content_1_footer */}
      <ContentOneFooter />
    </>
  );
};

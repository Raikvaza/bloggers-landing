"use client";

import IconLevels from "@/shared/assets/icons/icon_levels.svg";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const contentArray = [
  {
    title: "Реклама подобрана под вашу нишу",
    text: "Благодаря настройкам, вам предлагаются самые подходящие проекты, а обширные фильтры помогут найти нужный проект самим",
  },
  {
    title: "Теперь ваш профиль работает на вас",
    text: "Рекламодатели увидят всю информацию в одном месте. Удобно получать и выполнять заказы",
  },
  {
    title: "Общайтесь с заказчиком прямо в приложении",
    text: "Вам больше не нужно переходить из одного мессенджера в другой — в приложении все под рукой",
  },
];

export const SettingsCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    customPaging: (i: number) => (
      <div className="relative mt-2 flex h-[6px] w-full items-center justify-center">
        <span
          className={`mx-auto transition-all duration-300
            ${i === activeIndex ? "h-[4.05px] w-[25.94px] rounded-[6.49px] bg-[#171719]" : "h-[6px] w-[6px] rounded-full bg-[#17171966] opacity-50"}`}
        ></span>
      </div>
    ),
  };

  const backgroundColors = ["#E0F97B", "#8065FF", "#AB9AFF"];

  return (
    <motion.div
      className={cn(
        "flex h-[640px] w-[304px] flex-col items-stretch justify-start overflow-hidden rounded-[19.46px] border-[6px] border-border-primary-inverse px-5 pb-[18px]",
      )}
      style={{ backgroundColor: backgroundColors[activeIndex] }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <Typography variant={"bodyS"} className="!font-extrabold">
          9:41
        </Typography>
        <IconLevels className="-mr-6" />
      </div>
      <Typography
        className={cn(
          "text-center !text-[19.46px] !font-bold !leading-[23.35px]",
          (activeIndex == 1 || activeIndex == 2) && "text-white",
        )}
      >
        InBOOST
      </Typography>
      <div className="relative mb-10 mt-4 grow">
        <motion.div
          className="absolute right-1 top-11 z-50 h-[42px] min-w-[42px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            borderRadius: activeIndex === 1 ? "20px 0px 10px 10px" : "0px",
            y: activeIndex === 1 || activeIndex === 2 ? 100 : 10,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {activeIndex == 0 && (
            <Image src={"/tmp/insta_rotated.png"} fill alt="insta" />
          )}
          {activeIndex == 1 && (
            <div className="z-50 rounded-xl rounded-bl-none bg-white px-[6px] py-[6.3px]">
              <Typography
                variant={"bodyM"}
                className="p-0 text-center !text-[14.19px] !font-extrabold !leading-[19.87px] text-bg-accent-active"
              >
                Фильтры
              </Typography>
            </div>
          )}
          {activeIndex == 2 && (
            <div className="z-50 rounded-xl rounded-bl-none bg-white px-[6px] py-[6.3px]">
              <Typography
                variant={"bodyM"}
                className="p-0 text-center !text-[14.19px] !font-extrabold !leading-[19.87px] text-bg-primary-inverse"
              >
                Чат
              </Typography>
            </div>
          )}
        </motion.div>
        <motion.div
          className="absolute left-3 top-0 z-50 h-[42px] min-w-[42px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            borderRadius: activeIndex === 1 ? "20px 0px 10px 10px" : "0px",
            x: activeIndex === 0 || activeIndex === 1 ? -20 : 150,
            y: activeIndex === 0 ? 70 : activeIndex === 1 ? 30 : 50,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {activeIndex == 0 && (
            <div className="z-50 rounded-xl rounded-br-none bg-white px-[6px] py-[6.3px]">
              <Typography
                variant={"bodyM"}
                className="p-0 text-center !text-[14.19px] !font-extrabold !leading-[19.87px] text-bg-primary-inverse"
              >
                Проекты
              </Typography>
            </div>
          )}
          {activeIndex == 1 && (
            <div className="z-50 rounded-xl rounded-br-none bg-white px-[6px] py-[6.3px]">
              <Typography
                variant={"bodyM"}
                className="p-0 text-center !text-[14.19px] !font-extrabold !leading-[19.87px] text-bg-accent-active"
              >
                Настройки
              </Typography>
            </div>
          )}
          {activeIndex == 2 && (
            <div className="z-50 rounded-xl rounded-bl-none bg-white px-[6px] py-[6.3px]">
              <Typography
                variant={"bodyM"}
                className="p-0 text-center !text-[14.19px] !font-extrabold !leading-[19.87px] text-bg-primary-inverse"
              >
                Аналитика
              </Typography>
            </div>
          )}
        </motion.div>
        <motion.div
          className="absolute left-0 top-0 z-50 h-[42px] w-[42px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            borderRadius: activeIndex === 1 ? "20px 0px 10px 10px" : "0px",
            y: activeIndex === 0 ? 160 : activeIndex === 1 ? 0 : 15,
            x: activeIndex === 0 ? 10 : activeIndex === 1 ? 190 : 10,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {activeIndex == 0 && (
            <Image src={"/tmp/slider_mini_1.png"} fill alt="slider_image" />
          )}
          {activeIndex == 1 && (
            <Image src={"/tmp/slider_mini_2.png"} fill alt="slider_image" />
          )}
          {activeIndex == 2 && (
            <Image src={"/tmp/slider_mini_3.png"} fill alt="slider_image" />
          )}
        </motion.div>
        {/* Carousel/Slider */}
        <div className="relative mx-auto h-[194px] w-[180px] rounded-[26px]">
          <Slider {...settings} className="h-full w-full">
            <Image
              width={180}
              height={194}
              src="/tmp/slider_1.png"
              className="z-50 object-cover"
              alt="slider image 1"
              quality={100}
            />
            <Image
              width={180}
              height={194}
              src="/tmp/slider_2.png"
              className="z-50 object-cover"
              alt="slider image 2"
              quality={100}
            />
            <Image
              width={180}
              height={194}
              src="/tmp/slider_3.png"
              className="z-50 object-cover"
              alt="slider image 3"
              quality={100}
            />
          </Slider>
        </div>
      </div>
      <Typography
        className={cn(
          "!mb-2 !text-[26px] !font-bold !leading-[31.13px] text-text-primary",
          (activeIndex == 1 || activeIndex == 2) && "text-white",
        )}
      >
        {/* title */}
        {contentArray[activeIndex].title}
      </Typography>
      <Typography
        className={cn(
          "!text-[12.16px] !font-normal !leading-[17.02px] text-text-secondary",
          (activeIndex == 1 || activeIndex == 2) && "text-white",
        )}
      >
        {/* text */}
        {contentArray[activeIndex].text}
      </Typography>
      <motion.button
        className="mt-[18px] h-[45.4px] w-[252px] self-center rounded-[26px] bg-bg-primary-inverse px-[6.49px] pb-[15px] pt-[12.97px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Typography className="!text-center !text-[13px] !font-semibold !leading-[18.16px] text-bg-primary">
          Войти
        </Typography>
      </motion.button>
      <Typography
        className={cn(
          "px-[6.49px] pb-[15px] pt-[12.97px] text-center",
          (activeIndex == 1 || activeIndex == 2) && "text-white",
        )}
      >
        Зарегистрироваться
      </Typography>
    </motion.div>
  );
};

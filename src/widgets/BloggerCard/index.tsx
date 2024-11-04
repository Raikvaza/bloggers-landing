"use client";

import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";

import ChevronRightButton from "../IconButtonChevronRIght";
import { RegisterForm } from "../RegisterForm";

type Props = {
  frontTitle: string;
  frontText: string;
  backTitle: string;
  backText: string[];
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
  color?: string;
};

export const BloggerCard = ({
  color = "bg-lilac-600",
  backText,
  backTitle,
  imageHeight,
  imageWidth,
  frontText,
  frontTitle,
  imageUrl,
}: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);

  const handleFlip = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div
      className="perspective-1000 relative h-[548px] w-[358px] cursor-pointer rounded-2xl"
      style={{ perspective: 1000 }}
      onHoverStart={() => !isMobile && setIsFlipped(true)}
      onHoverEnd={() => !isMobile && setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Front Card */}
        <motion.div
          className={cn(
            "absolute inset-0 flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-2xl p-8 pb-0",
            color ? color : "bg-lilac-600",
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col items-start justify-start gap-2">
            <Typography variant={"headline3"}>{frontTitle}</Typography>
            <Typography variant={"bodyM"} className="pr-3">
              {frontText}
            </Typography>
          </div>
          <Image
            src={imageUrl}
            alt="blogger card"
            width={imageWidth ?? 244}
            height={imageHeight ?? 388}
            quality={100}
            className="self-center"
            style={{
              minHeight: `${imageHeight}px`,
              minWidth: `${imageWidth}px`,
            }}
          />
        </motion.div>

        {/* Back Card */}
        <motion.div
          className="absolute inset-0 flex h-full w-full flex-col items-start justify-between gap-4 rounded-2xl bg-bg-primary-inverse p-8"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col items-stretch justify-start gap-6">
            <Typography variant={"headline3"} className="text-white">
              {backTitle}
            </Typography>
            <div className="flex flex-col items-stretch justify-start gap-4">
              {backText.map((text, index) => (
                <Typography
                  key={index}
                  variant={"bodyM"}
                  className="text-text-tertiary"
                >
                  {text}
                </Typography>
              ))}
            </div>
          </div>
          <RegisterForm
            isFormDialogOpen={isFormDialogOpen}
            setIsFormDialogOpen={setIsFormDialogOpen}
          />
          <div
            onClick={() => setIsFormDialogOpen(true)}
            className="flex w-full items-center justify-between"
          >
            <Typography variant={"bodyM"} className="text-bg-primary">
              Узнать больше
            </Typography>
            <ChevronRightButton />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

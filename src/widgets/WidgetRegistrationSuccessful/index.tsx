import { useDialogSuccess } from "@/features/application/model/dialogSuccessContext";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/Dialog";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";
import React from "react";

// Adjust import path as needed

export const WidgetRegistrationSuccessful = () => {
  const { open, setOpen } = useDialogSuccess();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="!z-[100] flex w-[95vw] items-center justify-center gap-[10px] rounded-[32px] bg-[#FFFFFF] px-[20px] py-[100px] md:w-[600px] md:px-[80px] md:py-[120px]">
        <Image
          src={"/tmp/success_cubes.png"}
          alt=""
          width={550}
          height={190}
          className="absolute"
        />
        <div className="flex flex-col items-stretch justify-start gap-3">
          <Typography className="!text-[36px] !font-bold !leading-[50.4px]">
            Все получилось!
          </Typography>
          <Typography className="!text-[16px] !font-medium !leading-[22.4px] text-[#171719E0]">
            Мы свяжемся с вами в течение 24 часов
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
};

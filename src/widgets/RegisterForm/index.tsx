import IconClose from "@/shared/assets/icons/icon_close.svg";
import { Button } from "@/shared/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/shared/ui/Dialog";
import { Input } from "@/shared/ui/Input";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const RegisterForm = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="z-50" asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className="
          !z-[100] 
          flex
          w-[98vw]
          flex-col
          gap-5
          !rounded-[32px]
          bg-white
          pb-[80px]
          pt-20
          md:w-[600px]
          md:p-20
          md:pt-[92px]
        "
      >
        <DialogClose className="absolute right-10 top-10 z-[100] h-8 w-8 ">
          <IconClose />
        </DialogClose>
        <DialogHeader className="relative md:mb-5">
          <Image
            src={"/tmp/form_cubes.png"}
            alt="form cubes"
            width={543}
            height={182}
            className="absolute -top-[48px] left-[12px] z-[60] min-h-[182px] max-w-[543px] -translate-x-16"
          />

          <div className="flex flex-col items-stretch justify-start gap-2">
            <Typography className="text-center font-bold" variant={"headline2"}>
              Начать BOOST!
            </Typography>
            <Typography
              className="w-[380px] self-center px-2 text-center !text-[16px] !font-medium !leading-[22.4px] text-[#171719E0]"
              variant={"bodyM"}
            >
              Введите свои данные и мы свяжемся с вами в течение 24 часов.
              Вы получите всю необходимую информацию и помощь в мгновенной
              регистрации.
            </Typography>
          </div>
        </DialogHeader>
        {/* Form itself */}
        <div
          className="
          flex
          w-full flex-col items-stretch
          justify-start
          gap-4
          "
        >
          <Input label="Имя и фамилия" placeholder="Например, Ольга Ивановна" />
          <Input
            label="Аккаунт в Instagram или TikTok"
            placeholder="@username"
          />
          <Input label="Номер телефона" placeholder="+7(XXX)-XXX-XX-XX" />
          <div className="flex w-full flex-col items-stretch justify-start gap-3 md:mt-4">
            <Button variant={"secondary"} className="w-full">
              Отправить
            </Button>
            <Typography variant={"bodyS"} className="text-[#171719E0]">
              Нажимая «Отправить», вы принимаете
              <Link href={"/documentation"}>
                <span className="text-[#6C4DFF] hover:cursor-pointer">
                  {" "}
                  Соглашение на обработку персональных данных
                </span>
              </Link>
            </Typography>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

import { config } from "@/config";
import { MaskedPhoneInput } from "@/features/application";
import { useDialogSuccess } from "@/features/application/model/dialogSuccessContext";
import IconClose from "@/shared/assets/icons/icon_close.svg";
import { Button } from "@/shared/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@/shared/ui/Dialog";
import { Input } from "@/shared/ui/Input";
import { Typography } from "@/shared/ui/Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { WidgetRegistrationSuccessful } from "../WidgetRegistrationSuccessful";

interface RegisterFormProps {
  isFormDialogOpen: boolean;
  setIsFormDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Updated schema with required validation
const registerFormSchema = z.object({
  name: z
    .string({ required_error: "Введите, пожалуйста, ваше имя" })
    .nonempty({ message: "Введите, пожалуйста, ваше имя" }),
  login: z
    .string({ required_error: "Введите, пожалуйста, логин из соцсетей" })
    .nonempty({ message: "Введите, пожалуйста, логин из соцсетей" }),
  phone: z.string({ required_error: "Введите, пожалуйста, номер телефона" }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export const RegisterForm = ({
  isFormDialogOpen,
  setIsFormDialogOpen,
}: RegisterFormProps) => {
  const { setOpen } = useDialogSuccess();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onSubmit",
  });

  const mutation = useMutation({
    mutationFn: (data: RegisterFormData) => {
      return fetch(`${config.API_BASE}/lending/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onError: (error: any) => {
      console.error("Error submitting form:", error.message);
      setIsFormDialogOpen(false);
    },
    onSuccess: () => {
      setOpen(true);
      setIsFormDialogOpen(false);
      reset();
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    mutation.mutate(data);
  };
  const handleOpenChange = (open: boolean) => {
    setIsFormDialogOpen(open);
  };
  return (
    <>
      <Dialog open={isFormDialogOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="!z-[100] flex w-[98vw] flex-col gap-5 !rounded-[32px] bg-white pb-[80px] pt-20 md:w-[600px] md:p-20 md:pt-[92px]">
          <DialogClose className="absolute right-10 top-10 z-[100] h-8 w-8">
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
              <Typography
                className="text-center font-bold"
                variant={"headline2"}
              >
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-stretch justify-start gap-4"
          >
            <Input
              label="Ваше имя"
              placeholder="Алия Муратовна"
              {...register("name")}
              error={errors.name?.message}
            />
            <Input
              label="Аккаунт в Instagram или TikTok"
              placeholder="@username"
              {...register("login")}
              error={errors.login?.message}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <MaskedPhoneInput
                  {...field}
                  error={errors.phone?.message}
                  disabled={mutation.isPending}
                  label="Номер телефона"
                  placeholder="+7 (___) ___-__-__"
                />
              )}
            />
            <div className="flex w-full flex-col items-stretch justify-start gap-3 md:mt-4">
              <Button
                isLoading={mutation.isPending}
                variant={"secondary"}
                className="w-full"
                type="submit"
              >
                {mutation.isPending ? "Отправка..." : "Отправить"}
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
            {mutation.isError && (
              <Typography className="text-red-500">
                Error submitting form. Please try again.
              </Typography>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

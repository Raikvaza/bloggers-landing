import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from "react";

export const customButtonVariants = cva(
  "flex items-center leading-[140%] px-8 py-4 h-[62px] rounded-[32px] justify-center",
  {
    variants: {
      variant: {
        primary: ["bg-bg-primary-inverse", "active:bg-gradient-lime"],
        secondary: [
          "bg-bg-accent",
          "text-bg-primary",
          "hover:bg-bg-accent-hover",
          "active:bg-bg-accent-active",
        ],
        ghost: [""],
        primary_black: ["bg-base-950", "text-base-40"],
        primary_dark: ["bg-base-300", "active:bg-gradient-dark"],
      },
      disabled: {
        true: ["opacity-50", "cursor-not-allowed"],
        false: [""],
      },
    },
    compoundVariants: [{ variant: "primary" }],
    defaultVariants: {
      variant: "primary",
      disabled: false,
    },
  },
);

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof customButtonVariants> {
  isLoading?: boolean;
  asChild?: boolean;
  disabled?: boolean;
  prefixIcon?: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      children,
      className,
      isLoading = false,
      asChild = false,
      disabled = false,
      prefixIcon,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(customButtonVariants({ variant, disabled }), className)}
        ref={ref}
        disabled={disabled}
        {...(Comp === "button" ? { type } : {})}
        {...props}
      >
        {isLoading ? (
          <div className="mx-auto">
            <Image
              quality={100}
              className="animate-spin"
              alt="loader"
              src={"/tmp/loader.png"}
              width={32}
              height={32}
            />
          </div>
        ) : (
          <>
            {<span className="mr-2">{prefixIcon}</span>}
            <Typography variant="caption2">{children}</Typography>
          </>
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

import { Input } from "@/shared/ui/Input";
import React from "react";
import InputMask from "react-input-mask";

interface MaskedPhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  label?: string;
  error?: string; // Added error prop
}

export const MaskedPhoneInput = ({
  value,
  onChange,
  disabled = false,
  name = "phone",
  placeholder = "+7 (___) ___-__-__",
  label = "Номер телефона",
  error, // Accept error prop
}: MaskedPhoneInputProps): JSX.Element => {
  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      maskChar={null}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <Input
        name={name}
        placeholder={placeholder}
        label={label}
        error={error}
      />
    </InputMask>
  );
};

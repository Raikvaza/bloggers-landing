// src/entities/register/hooks/useRegisterMutation.ts
import { config } from "@/config";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

interface RegisterFormData {
  login: string;
  phone: string;
}

interface RegisterResponse {
  message?: string;
}

export const useRegisterMutation = (
  options?: UseMutationOptions<
    RegisterResponse | void,
    Error,
    RegisterFormData
  >,
): UseMutationResult<RegisterResponse | void, Error, RegisterFormData> => {
  return useMutation<RegisterResponse | void, Error, RegisterFormData>({
    mutationFn: async (data: RegisterFormData) => {
      const response = await fetch(`${config.API_BASE}/lending/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 204) {
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      return response.json();
    },
    ...options,
  });
};

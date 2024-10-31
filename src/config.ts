type ApiConfig = {
  API_BASE?: string;
  BASE_URL?: string;
};

export const config: ApiConfig = {
  API_BASE: process.env.NEXT_PUBLIC_API_BASE,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
};

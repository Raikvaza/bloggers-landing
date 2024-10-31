import clsx from "clsx";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

import "./globals.css";
import { Provider } from "./provider";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Bloggers",
  description: "Bloggers next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          redHatDisplay.className,
          "flex min-h-[100dvh] flex-col antialiased",
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

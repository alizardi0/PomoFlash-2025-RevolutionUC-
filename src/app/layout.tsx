import type { Metadata } from "next";

import { Provider } from "@/components/ui/provider";
import "./globals.css";



export const metadata: Metadata = {
  title: "PomoFlash",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <Provider defaultTheme="light">
          {children}
        </Provider>
      </body>
    </html>
  );
}

"use client";
import { useMemo, useState } from "react";

import { Login } from "@/components/Login";
import { Provider } from "@/components/ui/provider";

import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = useMemo(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("userid");
    }
  }, []);

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <Provider defaultTheme="light">
          {(userId || loggedIn) ? children : <Login setLoggedIn={setLoggedIn} />}
        </Provider>
      </body>
    </html>
  );
}

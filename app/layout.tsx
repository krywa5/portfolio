import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import * as Toast from "@radix-ui/react-toast";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "WWWasilewski - Web development",
  description: "A portfolio page for web developer - Krystian Wasilewski.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Toast.Provider swipeDirection="right">
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </Toast.Provider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <NextIntlClientProvider>
          <Toast.Provider swipeDirection="right">
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
          </Toast.Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

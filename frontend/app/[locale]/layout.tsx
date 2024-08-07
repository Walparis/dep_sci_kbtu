import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/app/globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/app/components/navbar";
import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useTranslations,
} from "next-intl";
import { notFound } from "next/navigation";
import pick from "lodash/pick";
import Footer from "../components/footer";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "KBTU Science(edit)",
  description: "KBTU science descriptio(edit)",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const messages = useMessages();
  // const tMeta = useTranslations("Metadata");

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Wrap it because it can't be turned into server side component */}

        {/* <NextIntlClientProvider messages={pick(messages, "Navbar")}> */}
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main
            className={cn("min-h-screen bg-background font-sans antialiased")}
          >
            {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
            {children}
            {/* </NextIntlClientProvider> */}
          </main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

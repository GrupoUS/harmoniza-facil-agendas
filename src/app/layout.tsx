import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/calendar.css";
import { Providers } from "@/components/providers";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Harmoniza Fácil Agendas - GRUPO US",
  description:
    "Sistema de agendamento para harmonização facial - GRUPO US VIBECODE SYSTEM",
  keywords:
    "harmonização facial, agendamento, GRUPO US, calendar, appointments",
  authors: [{ name: "GRUPO US" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}

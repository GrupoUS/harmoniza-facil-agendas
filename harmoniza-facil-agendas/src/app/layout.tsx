import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prática TRINTAE3 - Agendamento de Pacientes Modelo",
  description: "Sistema de agendamento para pacientes modelo dos cursos de harmonização facial do GRUPO US",
  keywords: "harmonização facial, agendamento, pacientes modelo, GRUPO US, TRINTAE3",
  authors: [{ name: "GRUPO US" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased main-layout`}>
        {children}
      </body>
    </html>
  );
}

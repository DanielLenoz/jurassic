import type { Metadata } from "next";
import { Carter_One, Raleway, Archivo } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jurrasic park",
  description: "web Jurassic park",
  keywords: [
    "landing page",
    "wed dynamic",
    "dinosaurios",
    "jurassic park",
    "jurassic world",
    "daniel",
    "rodriguez",
  ],
};

const carter_One = Carter_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-carter-One",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-raleway",
});
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Archivo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${carter_One.variable} ${raleway.variable} ${archivo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

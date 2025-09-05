import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutTracker";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "WellNest",
  description: "Online Therapy Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins_init.className} text-[#E6E8D2] bg-[#896790]`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

"use client"; // Mark this file as a client component

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/app/providers";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define the routes where you don't want NavBar & Footer
  const hideLayoutForRoutes = ["/ai-chatbot","/login"]; // Change this


  const shouldHideLayout = hideLayoutForRoutes.includes(pathname);

  return (
    <>
    <Providers>
      {!shouldHideLayout   && <NavBar />}
      {children}
      {!shouldHideLayout  && <Footer />}
      </Providers>
    </>
  );
}

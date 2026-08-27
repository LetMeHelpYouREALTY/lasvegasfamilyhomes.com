import type { ReactNode } from "react";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

type LpPageChromeProps = {
  children: ReactNode;
};

export default function LpPageChrome({ children }: LpPageChromeProps) {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24">{children}</main>
      <Footer />
    </>
  );
}

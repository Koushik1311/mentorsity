import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="bg-slate-50 container mx-auto">{children}</div>
    </>
  );
}

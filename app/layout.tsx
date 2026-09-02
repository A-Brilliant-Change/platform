import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import MasterNavigation from "@/components/navigation/MasterNavigation";

export const metadata: Metadata = {
  title: "A Brilliant Change",
  description: "Every Opportunity Begins With People™",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <MasterNavigation />
        {children}
      </body>
    </html>
  );
}








"use client";

import "./globals.css";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import { usePathname } from "next/navigation";
import ReturnHomeScreenButton from "./utils/navigation/ReturnToHomeScreenButton";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const vT323 = VT323({ weight: "400", variable: "--font-vt323", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideButtonRoutes = ["/", "/BootScreen", "/HomeScreen"];
  const shouldShowButton = !hideButtonRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`dark ${vT323.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="h-full flex flex-col">
          {children}
        </main>

        {shouldShowButton && (
          <div className="fixed bottom-6 right-6 z-50">
            <ReturnHomeScreenButton />
          </div>
        )}
      </body>
    </html>
  );
}
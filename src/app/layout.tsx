"use client";

import "./globals.css";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import { usePathname } from "next/navigation";
import ReturnHomeScreenButton from "./utils/navigation/ReturnToHomeScreenButton";
import { BackButtonProvider, useBackButton } from "./utils/navigation/BackButtonContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const vT323 = VT323({ weight: "400", variable: "--font-vt323", subsets: ["latin"] });

// Wrapper to handle showing the button
const BackButtonWrapper = ({ pathname }: { pathname: string }) => {
  const { hide } = useBackButton();
  const hideButtonRoutes = ["/", "/BootScreen", "/HomeScreen"];
  const shouldShowButton = !hide && !hideButtonRoutes.includes(pathname);

  if (!shouldShowButton) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ReturnHomeScreenButton />
    </div>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`dark ${vT323.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BackButtonProvider>
          <main className="h-full flex flex-col">
            {children}
          </main>

          <BackButtonWrapper pathname={pathname} />
        </BackButtonProvider>
      </body>
    </html>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
  
        const locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            easing: (t) => t * (2 - t), // Smooth ease-out cubic function
            lerp: 0.1,
            smoothTouch: true,
            smoothWheel: true,
            duration: 1,
          },
        });
      } catch (error) {
        console.error("Error loading Locomotive Scroll:", error);
      }
    };
  
    initLocomotiveScroll();
  }, []);

  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}

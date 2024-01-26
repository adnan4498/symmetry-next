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

export default function RootLayout({ children  , rootProp}) {
  useEffect(() => {
    /* this code will hide / disable the scroll on page */
    const body = document.body;
    body.style.overflow = "hidden";
  }, []);


  /****   locomotive scroll is disabled for 3 seconds to ensure user do not scroll in the middle of black animation at start.   ****/
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
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
        // locomotiveScroll.destroy();
        
      } catch (error) {
        console.error("Error loading Locomotive Scroll:", error);
      }
    }, 1000);


    // Clear the timeout to avoid executing the function more than once. after 3 seconds scroll is enabled
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <div className="no-scroll">{children}</div>
      </body>
    </html>
  );
}

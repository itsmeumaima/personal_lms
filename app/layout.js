import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// adding new fonts
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

//initializing the font
const outfit=Outfit({subsets:['latin']})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
      <Provider>
        {children}
      </Provider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}

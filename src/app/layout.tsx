"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";
import { ButtomHeader } from "@/components/header/ButtomHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { store } from "@/store/store";
import { Provider } from "react-redux";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
      <body
        
      >
        <Header />
        <ButtomHeader />
        {children}
        <Footer />
      </body>
    </html>
    </Provider>
    
  );
}
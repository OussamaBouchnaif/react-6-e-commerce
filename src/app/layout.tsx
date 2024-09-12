"use client";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";
import { ButtomHeader } from "@/components/header/ButtomHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Header />
            <ButtomHeader />
            {children}
            <Footer></Footer>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}

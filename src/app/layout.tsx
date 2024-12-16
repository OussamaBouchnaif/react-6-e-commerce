"use client";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";
import { ButtomHeader } from "@/components/header/ButtomHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";


export default async function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session;
}) {

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <SessionProvider session={session}>
              <Header />
              <ButtomHeader />
              {children}
              <Footer />
            </SessionProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}


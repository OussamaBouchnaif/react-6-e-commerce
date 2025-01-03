"use client";
import Link from "next/link";
import React from "react";
import { LuMenu } from "react-icons/lu";
import {  signOut } from "next-auth/react";
export const ButtomHeader = () => {
  return (
    <div className="buttom-header-container">
      <p className="buttom-header-item">
        <LuMenu className="text-x1"></LuMenu>
        <Link href={"/catalogue"}>All</Link>
      </p>

      {/* Echapper l’apostrophe */}
      <p className="buttom-header-item hidden md:inline-flex">Today&apos;s Deals</p>
      <p className="buttom-header-item hidden md:inline-flex">Customer Service</p>
      <p className="buttom-header-item hidden md:inline-flex">Regitry</p>
      <p className="buttom-header-item hidden md:inline-flex">Gift Cards</p>
      <p className="buttom-header-item hidden md:inline-flex">Sell</p>
      <p onClick={() => signOut()} className="buttom-header-item hidden md:inline-flex">Sign out</p>
      {/* Encore une correction pour l’apostrophe */}
      <p className="buttom-header-item hidden md:inline-flex">Today&apos;s Deals</p>
    </div>
  );
};

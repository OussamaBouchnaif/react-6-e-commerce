import Image from "next/image";
import React from "react";
import logo from "../../images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import CartIcon from "../../images/cartIcon.png";

export const Header = () => {
  return (
    <>
      <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
          <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
            <Image
              className="w-28 object-cover mt-1"
              src={logo}
              alt="logoImg"
            ></Image>
          </div>
          <div
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300  items-center justify-center h-[70%] hidden
                xl:inline-flex gap-1"
          >
            <FaLocationDot />
            <div>
              <p>Deliver to</p>
              <p className="text-white font-bold uppercase">USA</p>
            </div>
          </div>
          <div className="flex-1 h-10 hidden md:inline-flex items-center jusstify-between relative">
            <input
              className="w-full h-full rounded-md px-2 placholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                    focus-visible:border-amazon_yellow"
              type="text"
              placeholder="Search next_amazon_yt products"
            />
            <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
              <HiOutlineSearch />
            </span>
          </div>
          <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
            <p>Hello</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists{" "}
              <span>
                <BiCaretDown></BiCaretDown>
              </span>
            </p>
          </div>
          <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
            <p>Marked</p>
            <p>& Favorite</p>
          </div>

          <div>
            <Image
              className="w-auto object-cover h-8"
              src={CartIcon}
              alt="CartIcon"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

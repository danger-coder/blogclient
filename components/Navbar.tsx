"use client";
import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../public/assets/data.json";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="shadow-lg shadow-[gray]/[0.3] border-b-[0.5px] border-[gray]">
      <div className="container mx-auto xl:max-w-[1180px] text-white flex items-center justify-between py-[15px]">
        <Link href="/">
          <div className="h-[70px] flex items-center cursor-pointer">
            <Lottie
              animationData={animationData}
              height={70}
              width={70}
              className="lottie"
            />
            <p className="font-bold uppercase text-[20px] hover:text-purple-900">
              Blogs
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-[35px] cursor-pointer list-none">
          <li className="hover:border-b-[0.5px]">Home</li>
          <li className="hover:border-b-[0.5px]">Blog</li>
          <li className="hover:border-b-[0.5px]">Pages</li>
          <li className="hover:border-b-[0.5px]">Contact</li>
        </nav>
        <div>
          <div className="flex items-center max-w-[166px] bg-[#242535] pr-[8px] py-[5px]">
            <input
              className="w-full border-none outline-none bg-transparent pl-[10px] placeholder:text-[15px]"
              type="text"
              placeholder="Search"
            />
            <BiSearch fontSize={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

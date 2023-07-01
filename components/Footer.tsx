"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../public/assets/data.json";
const Footer = () => {
  return (
    <div className="xl:max-w-[1180px] container mx-auto border-t-[0.3px] border-[gray] flex items-center justify-between overflow-hidden py-[3px] text-white">
      <div>
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
          <p className="ml-[15px] text-[#97989F]">
            {" "}
            @Frontend dev2023. All Rights Reserved
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[20px] text-[16px] stext-[#97989F]">
        <h1 className="cursor-pointer hover:text-white">Term of Use</h1>
        <h1 className="cursor-pointer hover:text-white">Privacy Policy</h1>
        <h1 className="cursor-pointer hover:text-white">Cookie Policy</h1>
      </div>
    </div>
  );
};

export default Footer;

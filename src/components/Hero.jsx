import React from "react";
import styles from "../style";
import { herocardchart, heroimg, herotick } from "../assets";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h2 className="font-manrope font-extrabold text-6xl leading-[80px] tracking-tight mb-5">
          Managing business payments has never been easier
        </h2>
        <p className={`${styles.paragraph} text-[#757095] mb-10`}>
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </p>

        <div className={`flex items-center flex-col sm:flex-row gap-8 mb-10`}>
          <button className="text-white bg-secondary rounded-md px-10 py-4 font-manrope leading-8">
            Get Started
          </button>
          <a
            href="#"
            className="font-manrope text-[17px] leading-8 text-secondary"
          >
            See How It Works
          </a>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center gap-2">
            <img src={herotick} />
            <span>Free Register</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={herotick} />
            <span>Great Service</span>
          </div>
        </div>
      </div>
      <div className="flex-1 z-50 relative">
        <img
          src={heroimg}
          alt="Hero Image"
          className="mt-5 w-[100%] h-[100%] object-cover p-7 md:p-0 relative sm:left-20 hero-img"
        />

        <div className="sm:flex flex-col gap-1 justify-center absolute md:top-40 sm:top-60 hidden bg-white rounded-[10px] w-[196px] h-[112px] px-4 py-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-[#00E1F0] h-full w-5"></div>
              <h4 className="text-[14px] font-manrope">Revenue</h4>
            </div>
            <div className="flex font-bold">
              <h5 className="text-[16px] font-manrope">$36,680</h5>
              <span className="text-[13px] leading-4 text-[#00E1F0]">+12%</span>
            </div>
          </div>
          <p className="font-manrope text-[10px] leading-[14px] text-[#718EBF]">
            Compared to $28,000 Last Year
          </p>
        </div>

        <div className="sm:flex flex-col gap-1 justify-center absolute hidden bottom-20 md:bottom-7 bg-white rounded-[10px] w-[245px] h-[170px] px-4 py-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h4 className="text-[14px] font-manrope">Total Balance</h4>
            </div>
            <div className="flex font-bold">
              <h5 className="text-[16px] font-manrope">$4,200</h5>
              <span className="text-[13px] leading-4 text-[#00E1F0]">+14%</span>
            </div>
          </div>
          <img src={herocardchart} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

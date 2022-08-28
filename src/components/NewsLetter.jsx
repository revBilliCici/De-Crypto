import React from "react";
import styles, { layout } from "../style";
import { newsletterCrows } from "../assets";

const NewsLetter = () => {
  return (
    <section
      className={`bg-[#F8F8FE] relative rounded-[20px] gap-20 ${layout.section} ${styles.paddingX}`}
    >
      <div className={`${layout.sectionInfo} gap-5 md:max-w-[50%]`}>
        <h2 className="font-manrope font-extrabold text-lg uppercase text-secondary">
          Our NewsLetter
        </h2>
        <h3 className="font-manrope font-bold text-[50px] leading-[56px] tracking-tight">
          Stay updated with our weekly newsletter
        </h3>
        <p className="font-manrope text-lg tracking-tight text-para">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended
          active enable to.
        </p>
      </div>
      <div className={`flex flex-col gap-5 xs:min-w-[360px]`}>
        <h4 className="font-manrope font-bold text-2xl tracking-tight text-secondary">
          Signup For Newsletter
        </h4>
        <input
          placeholder="Email Address"
          type="email"
          name="email"
          className="rounded-[5px] font-manrope text-[20px] text-para tracking-tight leading-7 text-opacity-40 pt-[18px] pb-3 pl-5"
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          id="passwd"
          className="rounded-[5px] font-manrope text-[20px] text-para tracking-tight leading-7 text-opacity-40 pt-[18px] pb-3 pl-5"
        />
        <button className="bg-[#FF7F5C] rounded-[5px] py-4 font-manrope font-bold text-base text-center uppercase text-white">
          Get Started
        </button>
      </div>

      <img src={newsletterCrows} className="absolute right-10 -top-7" />
    </section>
  );
};

export default NewsLetter;

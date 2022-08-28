import React from "react";
import { feature1 } from "../assets";
import { layout } from "../style";

const FeatureFirst = () => {
  return (
    <section className={`${layout.sectionReverse} md:gap-0 gap-5`}>
      <div className={layout.sectionImgReverse}>
        <img
          src={feature1}
          alt="Recieve Payments From Everywhere"
          className="w-full h-full"
        />
      </div>

      <div className={`${layout.sectionInfo} gap-5`}>
        <h2 className="font-manrope font-extrabold uppercase text-lg text-secondary">
          Our Feature
        </h2>
        <h3 className="font-manrope font-bold text-5xl leading-[56px] tracking-tight">
          Recieve payments quickly from anywhere
        </h3>
        <p className="font-manrope text-lg tracking-tight text-para">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended
          active enable to.
        </p>
        <button className="rounded-[7px] bg-secondary text-white px-10 py-4">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default FeatureFirst;

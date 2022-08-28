import React from "react";
import styles, { layout } from "../style";
import { feature2 } from "../assets";

const FeatureSecond = () => {
  return (
    <section
      className={`${layout.section} md:gap-0 gap-5 ${styles.paddingY} mt-10`}
    >
      <div className={`${layout.sectionInfo} gap-5`}>
        <h2 className="font-manrope font-extrabold uppercase text-lg text-secondary">
          Our Feature
        </h2>
        <h3 className="font-manrope font-bold text-5xl leading-[56px] tracking-tight">
          Manage all expenses & incomes from your dashboard
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

      <div className={layout.sectionImg}>
        <img
          src={feature2}
          alt="Recieve Payments From Everywhere"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default FeatureSecond;

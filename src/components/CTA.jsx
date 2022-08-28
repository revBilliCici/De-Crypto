import React from "react";
import { CTAcrows } from "../assets";
import styles from "../style";

const CTA = () => {
  return (
    <section
      className={`bg-[#F8F8FE] relative gap-5 flex flex-col ${styles.paddingY} ${styles.paddingX} ${styles.flexCenter}`}
    >
      <h4 className="font-manrope font-bold text-[40px] leading-[56px] text-center tracking-tight">
        Get Started With De Crypto
      </h4>
      <p className="text-para font-manrope text-lg text-center tracking-tight md:w-2/3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        excepturi voluptatem ipsam animi deleniti amet, commodi voluptate
        consectetur natus laudantium enim explicabo, deserunt corporis nisi
        consequuntur nostrum fugit esse vel quo architecto? Iure eum molestiae
      </p>
      <button className="bg-secondary rounded-[7px] py-4 px-10 font-manrope text-base tracking-tight text-white">
        Get Started
      </button>
      <img
        src={CTAcrows}
        className="absolute sm:-top-16 left-10 h-[64px] -top-8 sm:h-fit"
      />
    </section>
  );
};

export default CTA;

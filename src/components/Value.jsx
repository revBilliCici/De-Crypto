import React from "react";
import styles from "../style";
import { quickSummary, manageWallet, requestPay } from "../assets";

const values = [
  {
    img: quickSummary,
    title: "Quick Summaries",
    desc: "Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh.",
  },
  {
    img: manageWallet,
    title: "Manage your wallets",
    desc: "Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. Latter person am secure.",
  },
  {
    img: requestPay,
    title: "Request Payments",
    desc: "And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. ",
  },
];

const Value = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <h3 className="font-manrope font-extrabold text-lg uppercase text-secondary">
        why de crypto
      </h3>
      <h4 className="font-manrope font-bold text-[40px] leading-[69px] text-center tracking-tight capitalize">
        Specially Designed For Crypto Payments
      </h4>
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {values.map((value) => (
          <div
            className="flex flex-col justify-between gap-10"
            key={value.title}
          >
            <img src={value.img} alt={value.title} />
            <div className="flex flex-col gap-5">
              <h5 className="font-manrope font-extrabold text-[26px] leading-8 tracking-tight">
                {value.title}
              </h5>
              <p className="font-manrope text-lg tracking-tight text-para">
                {value.desc}
              </p>
            </div>
          </div>
        ))}

        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Value;

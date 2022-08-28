import React from "react";
import styles from "../style";
import {
  coLogo1,
  coLogo2,
  coLogo3,
  coLogo4,
  coLogo5,
  coLogo6,
  coLogo7,
} from "../assets";

const companies = [
  coLogo1,
  coLogo2,
  coLogo3,
  coLogo4,
  coLogo5,
  coLogo6,
  coLogo7,
];

const Companies = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <h4 className="font-manrope text-[22px] leading-8 text-center">
        Companies we have helped grow
      </h4>
      <ul
        className={`${styles.flexCenter} flex-row flex-wrap list-none gap-10 xs:gap-[50px] py-14`}
      >
        {companies.map((logo, i) => (
          <li className="w-[40%] xs:w-fit" key={i}>
            <img src={logo} alt="company logo" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Companies;

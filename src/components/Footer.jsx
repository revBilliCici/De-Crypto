import React from "react";
import styles from "../style";
import {
  emailIcon,
  callIcon,
  messengerIcon,
  twitterIcon,
  linkedinIcon,
} from "../assets";

const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Careers",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Pricing",
        link: "#",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        name: "Invoicing",
        link: "#",
      },
      {
        name: "Contract",
        link: "#",
      },
      {
        name: "Accounting",
        link: "#",
      },
      {
        name: "Proposal",
        link: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Proposal Template",
        link: "#",
      },
      {
        name: "Invoice Template",
        link: "#",
      },
      {
        name: "Tutorial",
        link: "#",
      },
      {
        name: "How to write a contract",
        link: "#",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        icon: emailIcon,
        name: "mehmoodagha94@gmail.com",
        link: "#",
      },
      {
        icon: callIcon,
        name: "+92-300-484-8985",
        link: "#",
      },
    ],
  },
];

const FooterLinks = ({ linksData }) => {
  const { title, links } = linksData;
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-manrope font-bold text-[21px] leading-6 text-[#181433]">
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <div className="flex items-center gap-3">
            {link.icon && <img src={link.icon} />}
            <a
              className="font-manrope text-base text-[#181433]"
              href={link.link}
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingY} my-10 flex md:flex-row flex-col gap-20`}
    >
      <div className="flex flex-col gap-5">
        <h2 className="font-manrope font-bold text-[21px] leading-7 tracking-tight text-[#1B1C31]">
          DE CRYPTO
        </h2>
        <p className="font-manrope text-base tracking-tight text-[#757095]">
          Finance helps companies manage payments easily.
        </p>
        <div className="flex gap-5">
          <img src={linkedinIcon} />
          <img src={messengerIcon} />
          <img src={twitterIcon} />
        </div>
      </div>

      <nav className="flex justify-between w-full flex-wrap gap-y-20">
        {footerLinks.map((links, i) => (
          <FooterLinks key={i} linksData={links} />
        ))}
      </nav>
    </footer>
  );
};

export default Footer;

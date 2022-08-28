import React from "react";
import { reviewStar } from "../assets";

const TestimonialCard = ({ reviewData }) => {
  const { id, name, position, rating, review, avatar } = reviewData;

  const reviews = [];
  for (let i = 0; i < rating; i++) {
    reviews.push(<img key={i} className="" src={reviewStar} />);
  }

  return (
    <div
      className="relative flex flex-col bg-white max-w-[383px] h-[258px] bg-cut-card"
      style={{
        border: "1px solid #EDEDED",
        boxShadow:
          "0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593), 0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741)",
      }}
    >
      <div className="h-14 w-14 bg-secondary absolute -top-7 left-5 rounded-full" />

      <div className="flex flex-col flex-1 justify-end px-5 pb-3 gap-3">
        <div className="flex">{reviews}</div>
        <p className="font-manrope text-base text-para">{review}</p>
      </div>

      <hr />

      <div className="flex items-center gap-3 px-5 py-3">
        <img src={avatar} />
        <div>
          <h5 className="font-manrope font-bold text-sm text-[#453232]">
            {name}
          </h5>
          <p className="text-[#797979] font-manrope text-xs">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

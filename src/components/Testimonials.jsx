import React, { useRef } from "react";
import { avatar1, avatar2, avatar3 } from "../assets";
import styles from "../style";
import TestimonialCard from "./TestimonialCard";

import Glide, { Slide } from "react-glidejs/dist";
import "react-glidejs/dist/index.css";

const testimonialsData = [
  {
    id: 1,
    name: "Serhiy Hipskyy",
    position: "CEO WebWorld",
    rating: 5,
    review:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Justus Menke",
    position: "CEO GetNextDesign",
    rating: 4,
    review:
      "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Britain Eriksen",
    position: "CEO Eureka",
    rating: 3,
    review:
      "Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Justus Menke",
    position: "CEO GetNextDesign",
    rating: 4,
    review:
      "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    avatar: avatar2,
  },
  {
    id: 5,
    name: "Serhiy Hipskyy",
    position: "CEO WebWorld",
    rating: 5,
    review:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
    avatar: avatar1,
  },
];

const Testimonials = () => {
  const gliderRef = useRef(null);
  return (
    // <section className={`${styles.flexCenter} flex-col`}>
    //   <div className="flex items-center flex-col gap-5 mb-10">
    //     <h4 className="font-manrope font-extrabold text-lg uppercase text-secondary">
    //       Testimonial
    //     </h4>
    //     <h3 className="font-manrope font-bold text-[50px] leading-[56px] text-center tracking-tight">
    //       What Our Happy <br /> User Says
    //     </h3>
    //   </div>
    //   <div className="marquee mt-20">
    //     <div className="flex justify-center gap-10 track">
    //       {testimonialsData.map((testimonial) => (
    //         <TestimonialCard key={testimonial.id} reviewData={testimonial} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section
      className={`${styles.flexCenter} flex-col ${styles.paddingY} mb-28`}
    >
      <div className="flex items-center flex-col gap-5 mb-10">
        <h4 className="font-manrope font-extrabold text-lg uppercase text-secondary">
          Testimonial
        </h4>
        <h3 className="font-manrope font-bold text-[50px] leading-[56px] text-center tracking-tight">
          What Our Happy <br /> User Says
        </h3>
      </div>
      <Glide
        className="relative mt-10"
        ref={gliderRef}
        throttle={0}
        type="slider"
        customSlideAnimation={{
          timeout: 500,
          classNames: "fade",
        }}
        gap={10}
        perView={3}
        startAt={1}
        breakpoints={{
          1024: {
            perView: 2,
          },
          768: {
            perView: 1,
          },
        }}
        
        hideArrows={true}
        slideClassName="slider__frame"
        focusAt="center"
      >
        {testimonialsData.map((testimonial) => (
          <TestimonialCard reviewData={testimonial} />
        ))}
      </Glide>
    </section>
  );
};

export default Testimonials;

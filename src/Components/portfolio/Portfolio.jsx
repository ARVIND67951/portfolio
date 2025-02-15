import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const images = [
  {
    img: "https://drive.google.com/uc?id=15WfzcSU-avFDXy6PNMJrmv33ubPm94Cq",
    description: "React Portfolio - portfolio website built with React",
    link: "/",
  },
  {
    img: "https://drive.google.com/uc?id=14zC0WArR9CFAUXWKQpDvwlyulUom2pgs",
    description: "Hospital Management System - A MERN stack web app for managing Hospital activities",
    link: "https://hospital-psi-sandy.vercel.app/",
  },
  {
    img: "https://drive.google.com/uc?id=1OODjXL-XzHLduJXTHWs7xgyS_d9w04zF",
    description: "Jewellery Design - This WebSite are including multiple pages.",
    link: "https://arvind67951.github.io/Jewellery-3/",
  },
  {
    img: "https://drive.google.com/uc?id=1OODjXL-XzHLduJXTHWs7xgyS_d9w04zF",
    description:
      "Business Website.",
    link: "https://arvind67951.github.io/Business-web/",
  },
  {
    img: "https://drive.google.com/uc?id=1v2ENycXwGPUqxoidLcDy7-PLjnWkr__R",
    description:
      "Civil-Works-Home ",
    link: "https://arvind67951.github.io/Civil-Works-Home/",
  },
  {
    img: "https://drive.google.com/uc?id=1v2ENycXwGPUqxoidLcDy7-PLjnWkr__R",
    description:
      "Zomato Clone",
    link: "https://arvind67951.github.io/zomato/",
  },
  {
    img: "https://drive.google.com/uc?id=14zC0WArR9CFAUXWKQpDvwlyulUom2pgs",
    description: "Hospital Management System - A MERN stack web app for managing Hospital activities",
    link: "https://hospital-psi-sandy.vercel.app/",
  },
  {
    img: "https://drive.google.com/uc?id=1OODjXL-XzHLduJXTHWs7xgyS_d9w04zF",
    description: "Jewellery Design - This WebSite are including multiple pages.",
    link: "https://arvind67951.github.io/Jewellery-3/",
  },
  {
    img: "https://drive.google.com/uc?id=1OODjXL-XzHLduJXTHWs7xgyS_d9w04zF",
    description:
      "Business Website.",
    link: "https://arvind67951.github.io/Business-web/",
  },
  {
    img: "https://drive.google.com/uc?id=1v2ENycXwGPUqxoidLcDy7-PLjnWkr__R",
    description:
      "Zomato Clone",
    link: "https://arvind67951.github.io/zomato/",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <p className="pclick">Click to view</p>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        autoplay
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        navigation
        className="portfolio-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="pcontainer">
              <motion.img
                className="pimg"
                src={item.img}
                alt="Loading Project"
                whileTap={{ scale: 0.95 }}
              />
              <div className="poverlay">
                <div className="ptext">
                  <h4>Description</h4>
                  <p style={{ fontSize: "18px" }}>{item.description}</p>
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    <button className="pdtn">
                      <HiExternalLink />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;

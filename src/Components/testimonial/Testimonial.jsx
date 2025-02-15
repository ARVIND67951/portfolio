import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
// import shehzad from "../../img/tshahzad.jpg";
// import adnan from "../../img/testadnan.jpg";
// import saftain from "../../img/saftaincpy.jpg";
// import yasir from "../../img/yasircpy.jpg";
import { motion } from "framer-motion";

const Testimonial = () => {
  const clients = [
    {
      img: "https://www.gemhavendesigns.com/assets/Background-img/ram.jpg",
      // img: shehzad,
      cname: "Ramcharn Tiwari",
      dsg: "The Gemheven Design, Director",
      desc: "“Dedicated, skilled, and a pleasure to work with. Arvind consistently delivers exceptional results.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/testadnan_ojrzq8.jpg",
      // img: adnan,
      cname: "Akshat Jain",
      dsg: "Web Developer",
      desc: "“Excellent job! I'm glad I decided to work with Arvind . He exceeded my expectations.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/saftaincpy_rg0hwo.jpg",
      // img: saftain,
      cname: " Vinay Yadav ",
      dsg: " SEO Management, TJD",
      desc: "“Highly recommended! Arvind delivered a top-notch, SEO-friendly website and collaborated exceptionally.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/yasircpy_kopisj.jpg",
      cname: "Devesh Sharma.",
      dsg: "Cyber Security Expert",
      desc: "“Flawless implementation of website changes and timely delivery. Arvind ensured our satisfaction.”",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients & Mentors </span>
        <span>Love </span>
        <span>My Work</span>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0.6 }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className="testimonial"
              >
                <img src={client.img} alt="" />
                <span>{client.cname}</span>
                <span>{client.dsg}</span>
                <span>{client.desc}</span>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

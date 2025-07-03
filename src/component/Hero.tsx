import { useEffect } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section id="Hero">
      <div className="max-w-7xl mx-auto mt-10 px-6 md:px-20">
        <div className="bg-gradient-to-r from-[#B8E979] to-[#81C627] rounded-2xl px-4 h-auto md:h-[485px] grid grid-cols-1 md:grid-cols-2 items-center py-10 md:py-0">
          {/* Teks Kiri */}
          <div
            className="text-[#243A07] mt-10 md:mt-28 text-center md:text-left"
            data-aos="fade-right"
          >
            <p className="text-2xl md:text-4xl md:-translate-x-4 font-bold">
              Hello Welcome, i am
            </p>
            <h1 className="text-5xl md:text-[180px] font-extrabold leading-tight md:leading-[150px] md:-translate-x-7">
              GRAPHIC <br className="hidden md:block" /> DESIGN
            </h1>
          </div>

          {/* Gambar */}
          <div
            className="flex justify-center md:justify-end mt-10 md:mt-0"
            data-aos="fade-down-left"
          >
            <img
              src="/assets/img/Asset 5.png"
              alt="Graphic Designer"
              className="w-[370px] md:w-[370px] translate-x-0 md:translate-x-10"
            />
          </div>
        </div>
      </div>

      {/* About & Contact */}
      <div
        className="w-full max-w-4xl mx-auto mt-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 lg:gap-40"
        data-aos="fade-left"
      >
        <div className="text-left">
          <h2 className="text-xl font-bold text-[#243A07] mb-2">About Me</h2>
          <p className="text-md text-gray-900 leading-relaxed">
            I am <b>Syahrul Ahkam</b>, a graphic designer experienced in
            transforming ideas into impactful visuals through branding,
            illustration, and digital design. I strive to create meaningful and
            visually compelling work that delivers professional and consistent
            solutions.
          </p>
        </div>

        <div className="text-left">
          <h2 className="text-xl font-bold text-[#243A07] mb-2">Contact</h2>
          <ul className="text-md space-y-3 text-black">
            <li className="flex items-center gap-3">
              <FaEnvelope />
              <span>strayncut@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp />
              <span>+62 888 113 0084</span>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin />
              <span>linkedin.com/in/syahrulahkam</span>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram />
              <span>@strayncut</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Garis bawah */}
      <div className="px-6 md:px-20">
        <hr className="border-t border-gray-900 border-[1px] my-8" />
      </div>
    </section>
  );
};

export default Hero;

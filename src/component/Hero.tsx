import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="Hero">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-10 px-6 md:px-20">
        <div className="bg-gradient-to-r from-[#B8E979] to-[#81C627] rounded-2xl px-4 h-auto md:h-[485px] grid grid-cols-1 md:grid-cols-2 items-center py-10 md:py-0">
          {/* Teks Kiri */}
          <div
            className="text-[#243A07] mt-10 md:mt-28 text-center md:text-left"
            data-aos="fade-right"
          >
            <p className="text-sm md:text-xl  lg:text-3xl font-bold">
              Hello Welcome, I am
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[120px] xl:text-[180px] font-extrabold leading-tight md:leading-[90px] xl:leading-[150px] md:-translate-x-7">
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
              className="w-[240px] sm:w-[300px] md:w-[370px] md:translate-x-10"
            />
          </div>
        </div>
      </div>

      {/* About & Contact */}
<div
        className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 lg:gap-20 items-start"
        data-aos="fade-left"
      >
        {/* About Me */}
        <div className="text-left max-w-lg">
          <h2 className="text-xl font-bold text-[#243A07] mb-2">About Me</h2>
          <p className="text-md text-gray-900 leading-relaxed">
            I am <b>Syahrul Ahkam</b>, a graphic designer experienced in
            transforming ideas into impactful visuals through branding,
            illustration, and digital design. I strive to create meaningful and
            visually compelling work that delivers professional and consistent
            solutions.
          </p>
        </div>

        {/* Contact - Geser ke kanan */}
<div className="text-left md:pl-12 lg:pl-28 xl:pl-52 2xl:pl-52 xl:col-start-2">

  <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#243A07] mb-2">
    Contact
  </h2>
  <ul className="text-xs sm:text-sm md:text-base space-y-2 text-black leading-relaxed">
    <li className="flex items-center gap-3">
      <img src="/assets/icon/mail.svg" alt="email" className="w-5 h-5" />
      <a
        href="mailto:strayncut@gmail.com"
        className="hover:underline hover:decoration-[#D8E979]"
      >
        strayncut@gmail.com
      </a>
    </li>
    <li className="flex items-center gap-3">
      <img src="/assets/icon/wa.svg" alt="whatsapp" className="w-5 h-5" />
      <a
        href="https://wa.me/628881130084"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:decoration-[#D8E979]"
      >
        +62 888 113 0084
      </a>
    </li>
    <li className="flex items-center gap-3">
      <img src="/assets/icon/linkedin.svg" alt="linkedin" className="w-5 h-5" />
      <a
        href="https://www.linkedin.com/en/syahrulahkam"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:decoration-[#D8E979]"
      >
        syahrul ahkam
      </a>
    </li>
    <li className="flex items-center gap-3">
      <img src="/assets/icon/ig.svg" alt="instagram" className="w-5 h-5" />
      <a
        href="https://www.instagram.com/strayncut/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:decoration-[#D8E979]"
      >
        @strayncut
      </a>
    </li>
  </ul>
</div>

      </div>

      {/* Garis Bawah */}
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        <hr className="border-t border-[#B2B2B2] my-8" />
      </div>
    </section>
  );
};

export default Hero;

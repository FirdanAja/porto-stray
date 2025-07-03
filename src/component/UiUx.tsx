import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SectionUiux = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="relative bg-[#B8E979] overflow-hidden py-20 px-6 md:px-16 lg:px-24"
      id="UiUx"
    >
      {/* Background putih atas */}
      <div className="absolute top-0 left-0 w-full h-48 bg-white z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Judul */}
        <h2
          className="text-[48px] md:text-[100px] leading-tight md:leading-[85px] font-extrabold text-[#243A07] mb-4 mt-7"
          data-aos="fade-right"
        >
          UI/UX <br className="hidden md:block" /> WEBSITE
        </h2>

        {/* ALOPE Section */}
        <div className="flex flex-col lg:flex-row gap-6 px-0 md:px-10 items-start mt-16 md:mt-36 mb-12 md:mb-0">
          {/* Gambar Laptop */}
          <div className="w-full lg:w-[55%] flex flex-col items-center">
            <img
              src="/assets/img/laptop1.png"
              alt="Laptop ALOPE"
              className="w-full max-w-[750px] h-auto z-10"
              data-aos="fade-right"
            />
            <p
              className="-mt-3 text-xl md:text-6xl z-20 font-extrabold text-[#243A07] opacity-80 text-center"
              data-aos="fade-up"
            >
              ALOPE.ID
            </p>
          </div>

          {/* Dua gambar UI ALOPE */}
          <div className="w-full lg:w-[30%] md:-mt-60 flex flex-col md:flex-row gap-4 md:gap-0 md:-translate-x-20">
            <img
              src="/assets/img/alope1.png"
              alt="UI ALOPE 1"
              className="w-full h-auto md:h-[900px] object-contain md:translate-x-5 md:-translate-y-60"
              data-aos="fade-up"
            />
            <img
              src="/assets/img/alope2.png"
              alt="UI ALOPE 2"
              className="w-full h-auto md:h-[900px] object-contain md:translate-x-26 md:-translate-y-60"
              data-aos="fade-down"
            />
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#243A07] my-16 md:-mt-10 md:my-5"></div>

        {/* SRIBU Section */}
        <div className="flex flex-col lg:flex-row-reverse px-0 md:px-10 gap-6 items-start mb-16 md:mb-20">
          {/* Gambar Laptop */}
          <div className="w-full lg:w-[55%] flex flex-col items-center">
            <img
              src="/assets/img/laptop2.png"
              alt="Laptop SRIBU"
              className="w-full max-w-[750px] h-auto z-10 mt-10 md:mt-20"
              data-aos="fade-left"
            />
            <p
              className="-mt-3 text-xl md:text-6xl z-20 font-extrabold text-[#243A07] opacity-80 text-center md:text-right"
              data-aos="fade-up"
            >
              RE DESIGN
              <br />
              SRIBU.COM
            </p>
          </div>

          {/* Dua gambar UI SRIBU */}
          <div className="w-full lg:w-[30%] flex flex-col md:flex-row md:-mt-40 gap-4 md:gap-0 md:-translate-x-52">
            <img
              src="/assets/img/sribu1.png"
              alt="UI SRIBU 1"
              className="w-full h-auto md:h-[900px] object-contain md:-translate-x-56 md:-translate-y-40"
              data-aos="fade-up"
            />
            <img
              src="/assets/img/sribu2.png"
              alt="UI SRIBU 2"
              className="w-full h-auto md:h-[900px] object-contain md:-translate-x-60 md:-translate-y-40"
              data-aos="fade-down"
            />
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#243A07] my-16 md:-mt-20 md:-my-11"></div>

        {/* MOBILE Section */}
        <div className="mb-24">
          <h3
            className="text-[36px] md:text-[100px] font-extrabold text-[#243A07] mb-6 md:-mb-10"
            data-aos="fade-right"
          >
            MOBILE
          </h3>
          <div className="flex justify-center">
            <img
              src="/assets/img/mobile/Group 6.png"
              alt="Mobile"
              className="w-[600px] md:w-[220px] lg:w-[850px]"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUiux;

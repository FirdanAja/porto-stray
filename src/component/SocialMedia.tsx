import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SectionSocialMedia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="relative bg-[#DCF4BC] overflow-hidden py-20 pb-32 md:pb-[200px] px-6 md:px-16 lg:px-24"
      id="SosialMedia"
    >
      {/* Layer putih atas */}
      <div className="absolute top-0 left-0 w-full h-48 bg-white z-10"></div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Title */}
        <h2
          className="text-[48px] leading-tight md:text-[100px] md:leading-[80px] font-extrabold text-[#243A07] mb-12 mt-5"
          data-aos="fade-right"
        >
          SOCIAL <br className="hidden md:block" /> MEDIA
        </h2>

        {/* Layer 1: Kotak background */}
        <div
          className="bg-[#DCF4BC] rounded-xl overflow-hidden shadow-md w-full max-w-5xl mx-auto"
          data-aos="zoom-in"
        >
          <img
            src="/assets/img/social.png"
            alt="Social Media Background"
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </div>

        {/* PNG Kanan (mockup HP) */}
        <img
          src="/assets/img/umkm.png"
          alt="Social Media Mockup"
          className="hidden sm:block absolute right-0 bottom-0 w-[220px] sm:w-[400px] md:w-[600px] lg:w-[800px] translate-x-10 sm:translate-x-20 md:translate-x-40 -translate-y-32 md:-translate-y-72 pointer-events-none"
        />

        {/* PNG Kiri Bawah */}
        <img
          src="/assets/img/alope.png"
          alt="Dekorasi Kiri"
          className="hidden sm:block absolute left-0 bottom-[-120px] sm:bottom-[-180px] w-[120px] sm:w-[200px] lg:w-[800px] -translate-x-10 sm:-translate-x-20 md:-translate-x-40 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default SectionSocialMedia;

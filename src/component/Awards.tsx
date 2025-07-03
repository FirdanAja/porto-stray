import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const certificates = [
  {
    label: "SEKOLAHDESAIN.ID",
    img: "/assets/img/cer1.png",
  },
  {
    label: "SKILVUL.COM",
    img: "/assets/img/cer2.png",
  },
  {
    label: "MYSKILL.ID",
    img: "/assets/img/cer3.png",
  },
  {
    label: "",
    img: "/assets/img/cer4.png",
  },
  {
    label: "",
    img: "/assets/img/cer5.png",
  },
];

const SectionCertificate = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="relative bg-[#B8E979] overflow-hidden py-20 pb-[50px] px-6 md:px-16 lg:px-24"
      id="Awards"
    >
      <div className="absolute top-0 left-0 w-full h-48 bg-white"></div>
      <div className="max-w-7xl mx-auto">
        <h2
          className="relative mt-8 z-30 text-[60px] md:text-[100px] leading-[80px] font-extrabold text-[#243A07] mb-14"
          data-aos="fade-right"
        >
          Awards& <br />
          Certificate
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          {certificates.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 w-full min-h-[240px]"
              data-aos="fade-up"
            >
              {item.label && (
                <h3
                  className={`text-sm md:text-lg font-extrabold text-[#243A07] mb-2 ${
                    item.label === "SEKOLAHDESAIN.ID" ? "pl-4 md:pl-10" : ""
                  }`}
                >
                  {item.label}
                </h3>
              )}
              <div className="flex-grow flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.label || `Certificate ${index + 1}`}
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-left"
        >
          {certificates.slice(2).map((item, index) => {
            const realIndex = index + 2;
            const isCer4Or5 = realIndex === 3 || realIndex === 4;

            return (
              <div
                key={index}
                className={`flex flex-col justify-between p-4 w-full min-h-[240px] ${
                  isCer4Or5 ? "mt-7" : ""
                }`}
              >
                {item.label && (
                  <h3 className="text-sm md:text-lg font-extrabold text-[#243A07] mb-2">
                    {item.label}
                  </h3>
                )}
                <div className="flex-grow flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.label || `Certificate ${realIndex + 1}`}
                    className="max-h-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionCertificate;

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
      className="relative container mx-auto bg-[#B8E979] overflow-hidden py-20 pb-[50px] px-6 md:px-16 lg:px-24"
      id="Awards"
    >
      {/* Background putih atas */}
      <div className="absolute top-0 left-0 w-full h-48 bg-white z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Judul */}
        <h2
          className="text-[60px] md:text-[100px] leading-[80px] mt-8 font-extrabold text-[#243A07] mb-14 "
          data-aos="fade-right"
        >
          Awards& <br />
          Certificate
        </h2>

        {/* MYSKILL.ID - 3 sertifikat sejajar */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-[18px] md:text-[24px] font-extrabold text-[#243A07] mb-3">
            MYSKILL.ID
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.slice(2).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white/10 p-2 rounded-xl"
              >
                <img
                  src={item.img}
                  alt={`MySkill Certificate ${index + 1}`}
                  className="object-contain max-h-[220px] w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SEKOLAHDESAIN & SKILVUL - sejajar */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-2"
          data-aos="fade-up"
        >
          {/* SEKOLAHDESAIN */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#243A07] mb-3">
              SEKOLAHDESAIN.ID
            </h3>
            <img
              src={certificates[0].img}
              alt="SekolahDesain Certificate"
              className="max-h-[240px] w-full h-auto object-contain"
            />
          </div>

          {/* SKILVUL */}
          <div>
            <h3 className="text-[18px] md:text-[24px] font-extrabold text-[#243A07] mb-3">
              SKILVUL.COM
            </h3>
            <img
              src={certificates[1].img}
              alt="Skilvul Certificate"
              className=" md:h-[235px] w-50 md:items-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCertificate;

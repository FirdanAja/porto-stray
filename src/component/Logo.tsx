import { FaInstagram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const logos = [
  {
    title: "Youtube Logo Channel",
    desc: "Pembahasan tentang seputar anime&manga",
    ig: "@taokun0",
    img: "/assets/img/logo/1.png",
  },
  {
    title: "Brand logo Design",
    desc: "Tempat penjualan dan service sebuah laptop",
    ig: "@pubacom.kuningan",
    img: "/assets/img/logo/2.png",
  },
  {
    title: "Personal Logo Design",
    desc: "individu design logo ..........................",
    ig: "RND",
    img: "/assets/img/logo/3.png",
  },
  {
    title: "Redesign Mascot Logo",
    desc: "Tempat kursus online tentang coding",
    ig: "@alope.id",
    img: "/assets/img/logo/4.png",
  },
];

const SectionLogo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="bg-[#B8E979] mt-20 py-20 px-6 md:px-16 lg:px-24"
      id="Logo"
    >
      <h2
        className="text-[100px] leading-none font-extrabold text-[#243A07] mb-10 -mt-24"
        data-aos="fade-right"
      >
        LOGO
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
      >
        {logos.map((item, i) => (
          <div
            key={i}
            className="bg-[#DCF4BC] rounded-xl overflow-hidden shadow-sm border border-white"
          >
            {/* Text Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
              <div className="flex items-center text-sm text-gray-800 gap-2">
                <FaInstagram className="text-black" />
                <span>{item.ig}</span>
              </div>
            </div>

            {/* Image with padding */}
            <div className="px-2 pb-2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionLogo;

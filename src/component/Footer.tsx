const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10">
        {/* Kiri: Nama dan Tahun */}
        <div className="text-greenDark font-extrabold text-xl md:text-3xl">
          SYAHRUL AHKAM{" "}
          <span className="font-normal text-sm md:text-lg align-top">
            ©2025
          </span>
        </div>

        {/* Kanan: Contact */}
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-greenDark text-sm md:text-base">
  {/* Label */}
  <div className="text-xl md:text-2xl font-bold">Contact</div>

  {/* Kontak Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
    <div className="flex items-center gap-2">
      <img src="/assets/icon/mail.svg" alt="mail" className="w-5 h-5" />
      <a
        href="mailto:strayncut@gmail.com"
        className="hover:underline hover:decoration-[#D8E979]"
      >
        strayncut@gmail.com
      </a>
    </div>

    <div className="flex items-center gap-2">
      <img src="/assets/icon/wa.svg" alt="wa" className="w-5 h-5" />
      <a
        href="https://wa.me/628881130084"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:decoration-[#D8E979]"
      >
        +62 888 113 0084
      </a>
    </div>

    <div className="flex items-center gap-2">
      <img src="/assets/icon/linkedin.svg" alt="linkedin" className="w-5 h-5" />
      <a
        href="https://www.linkedin.com/in/syahrulahkam"
        target="_blank"
        rel="noopener noreferrer"
        className="break-all hover:underline hover:decoration-[#D8E979]"
      >
       syahrul ahkam
      </a>
    </div>

    <div className="flex items-center gap-2">
      <img src="/assets/icon/ig.svg" alt="ig" className="w-5 h-5" />
      <a
        href="https://www.instagram.com/strayncut/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:decoration-[#D8E979]"
      >
        @strayncut
      </a>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;

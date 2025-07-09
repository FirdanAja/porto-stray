const Footer = () => {
  return (
    <footer className="container mx-auto bg-gray-100 py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Kiri: Nama dan Tahun */}
        <div className="text-greenDark font-extrabold text-lg md:text-3xl">
          SYAHRUL AHKAM{" "}
          <span className="font-normal text-lg align-top">©2025</span>
        </div>

        {/* Kanan: Contact Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-sm md:text-base text-greenDark">
          {/* Label Contact */}
          <div className="text-3xl font-bold mr-2">Contact</div>

          {/* Kontak dalam 2 kolom */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {/* Kolom Kiri */}
            <div className="flex items-center gap-2">
              <img src="/assets/icon/mail.svg" alt="mail" className="w-5 h-5" />
              <span>strayncut@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/icon/wa.svg" alt="wa" className="w-5 h-5" />
              <span>+62 888 113 0084</span>
            </div>

            {/* Kolom Kanan */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/icon/linkedin.svg"
                alt="linkedin"
                className="w-5 h-5"
              />
              <span>linkedin.com/in/syahrulahkam</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/icon/ig.svg" alt="ig" className="w-5 h-5" />
              <span>@strayncut</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

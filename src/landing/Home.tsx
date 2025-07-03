import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Logo from "../component/Logo";
import SocialMedia from "../component/SocialMedia";
import Awards from "../component/Awards";
import UiUx from "../component/UiUx";

const Home = () => {
  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <Navbar />
      <Hero />
      <Logo />
      <SocialMedia />
      <UiUx />
      <Awards />
      <Footer />
    </div>
  );
};

export default Home;

import StarBackground from "@/components/StarBackground";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Guestbook from "@/components/Guestbook";
import VisitorCounter from "@/components/VisitorCounter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <StarBackground />
      <div className="min-h-screen relative z-10">
        <Header />
        <AboutMe />
        <Projects />
        <VisitorCounter />
        <Guestbook />
        <Footer />
      </div>
    </>
  );
};

export default Index;

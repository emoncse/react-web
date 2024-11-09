import React from "react";
import Slider from "../components/Slider";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import TechnologyMarquee from "../components/TechnologyMarquee";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "64px" }}>
        {/* <Slider /> */}
        <div style={{ margin: "40px 0" }} />
        <Services />
        <div style={{ margin: "40px 0" }} />
        <Projects />
        <div style={{ margin: "40px 0" }} />
        <Testimonials />
        <div style={{ margin: "40px 0" }} />
        <TechnologyMarquee />
        <div style={{ margin: "40px 0" }} />
        <ContactForm />
        <div style={{ margin: "40px 0" }} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

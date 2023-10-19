import React from "react";
import Navbar from "../components/Navebar";
import Hero from "../components/Hero";
import ServiceImg from "../components/assets/7.png.jpeg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        // text="Choose Your Favourite Destination."
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
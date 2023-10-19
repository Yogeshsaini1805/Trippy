import React from "react";
import Navbar from "../components/Navebar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Destination from "../components/Destination";
import Footer from "../components/Footer";

const Home = () => {
    return (
      <>
        <Navbar />
        <Hero
          cName="hero"
          heroImg="https://cdn.pixabay.com/photo/2020/10/09/19/39/utah-5641320_640.jpg"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination."
          buttonText="Travel Plan"
          url="/"
          btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
      </>
    );
  }
  
  export default Home;
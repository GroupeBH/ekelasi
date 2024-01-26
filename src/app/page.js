"use client";
import Header from "./components/Header";
import News from "./components/News";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import Nav from "./components/Nav";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import { useState } from "react";
// ..

export default function Home() {

  const scrolltoHash = function (linkNav) {
    const element = document.getElementById(linkNav);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div>
      <main className="">
        <Nav scrolltoHash={scrolltoHash} />
        <Header />
      </main>
      <div >
        <News />
      </div>
      <div >
        <FeaturesSection />
      </div>
      <div>
        <Ecosystem />
      </div>
      <div>
        <Partners />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

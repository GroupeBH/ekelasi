"use client"
import Header from "./components/Header";
import News from "./components/News";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import Nav from "./components/Nav";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
// ..

export default function Home() {
  
  return (
    <div>
      <main className="">
        <Nav />
        <Header />
      </main>
      <div id="news">
        <News />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="eco">
        <Ecosystem />
      </div>
      <div id="partner">
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

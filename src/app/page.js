import Header from "./components/Header";
import News from "./components/News";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import Nav from "./components/Nav";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main className="">
        <Nav />
        <Header />
      </main>
      <div>
        <News />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <Ecosystem />
      </div>
      <div>
        <Partners />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

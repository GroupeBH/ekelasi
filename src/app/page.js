import Image from "next/image";
import Header from "./components/Header";
import News from "./components/News";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* <main className=" flex min-h-screen flex-col items-center justify-between">
        <Header />
      </main> */}
      <div>
        <News />
      </div>
      <div>
        <Ecosystem />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

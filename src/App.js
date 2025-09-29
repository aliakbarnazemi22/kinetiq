import Blogs from "./components/Blogs";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Statics from "./components/Statics";

function App() {
  return (
    <main>
      <div className="relative w-full bg-[rgba(0,0,0,0.5)] min-h-[180vh]">
        <div className="absolute w-[263px] md:w-[463px] max-w-[863px] rotate-[22deg] h-[40vw] z-[-1] top-20 left-12 bg-[#2d29ec] blur-[6.5vw] rounded-[50%]"></div>
        <div className="absolute w-[163px] md:w-[363px] max-w-[863px] rotate-[22deg] h-[40vw] z-[-1] top-[550px] right-12 md:right-40 bg-[#2d29ec] blur-[6.5vw] rounded-[50%]"></div>
        <Header />
        <HeroSection />
        <Statics />
        <Blogs />
      </div>
    </main>
  );
}

export default App;

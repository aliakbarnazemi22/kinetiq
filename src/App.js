import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <main>
      <div className="relative w-full bg-[rgba(0,0,0,0.5)] min-h-[180vh]">
        <div className="absolute w-[463px] max-w-[863px] rotate-[22deg] h-[40vw] z-[-1] top-20 left-12 bg-[#2d29ec] blur-[6.5vw] rounded-[50%]"></div>
        <div className="absolute w-[363px] max-w-[863px] rotate-[22deg] h-[40vw] z-[-1] top-[550px] right-40 bg-[#2d29ec] blur-[6.5vw] rounded-[50%]"></div>
        <Header />
        <HeroSection />
      </div>
    </main>
  );
}

export default App;

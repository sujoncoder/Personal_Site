import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Videos from "./components/Videos";

const App = () => {
  return (
    <div className="bg-black">
      <HeroSlider />
      <About />
      <Videos />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
import { Navbar } from './Components/Navbar';
import { HeroSection } from './Components/LandingPage.jsx/HeroSection';
import { Section1 } from './Components/LandingPage.jsx/Section1';
import { Section2 } from './Components/LandingPage.jsx/Section2';
import { Section3 } from './Components/LandingPage.jsx/Section3';

function App() {
  return (
    <div className="bg-[#D9D9D9] bg-opacity-5">
      <Navbar />
      <HeroSection /> 
      <div className='h-[75px]'></div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default App;

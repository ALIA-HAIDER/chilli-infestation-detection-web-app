import Header from "./components/homepage/Header";
import HowItWorks from "./components/homepage/HowItWorks";
import IntroPart from "./components/homepage/IntroPart";
import TryItNow from "./components/homepage/TryItNow";
import WhyChooseUs from "./components/homepage/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Header/>
      <IntroPart/>
      <HowItWorks/>
      <TryItNow/>
      <WhyChooseUs/>
    </div>
  );
}

 import Navigation from './Components/Navigation/Navigation';
 import Hero from './Components/Hero/Hero';
 import Services from './Components/Services/Services';
 import WhyChoseUs from './Components/WhyChoseUs/WhyChoseUs';
 import ContactUs from './Components/ContactUs/ContactUs';
 import Footer from './Components/Footer/Footer';
 import AboutUs from './Components/AboutUs/AboutUs';
 import CleaningCostCalculator from './Components/CleaningCostCalculator/CleaningCostCalculator';
 import ServiceAreaMap from './Components/ServiceAreaMap/ServiceAreaMap';

 function App() {
   return (
     <>
       <Navigation />
       <Hero />
       <Services />
       <CleaningCostCalculator />
       <WhyChoseUs />
       <AboutUs />
       <ContactUs />
       <ServiceAreaMap />
       <Footer />
     </>
   );
 }

 export default App;
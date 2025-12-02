import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import ShippingOptions from '../components/ShippingOptions';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ShippingOptions />
      <Stats />
      <WhyChooseUs />        
      <Footer />
    </div>
  );
}

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import SuggestedProducts from './components/SuggestedProducts';
import BrowseProducts from './components/BrowseProducts';
import DeliveryInfo from './components/DeliveryInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Features />
      <SuggestedProducts />
      <BrowseProducts />
      <DeliveryInfo />
      <Footer />
    </div>
  );
}

export default App;

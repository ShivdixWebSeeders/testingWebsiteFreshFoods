import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import SuggestedProducts from './components/SuggestedProducts';
import BrowseProducts from './components/BrowseProducts';
import DeliveryInfo from './components/DeliveryInfo';
import Footer from './components/Footer';
import UIContextProvider from './context/UIContextProvider';

function App() {
  return (
    <div>

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

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './output.css';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;

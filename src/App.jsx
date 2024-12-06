import React from 'react';
import Header from './components/Header'; 
import Introduction from './components/Introduction'; 
import About from './components/About';
import Services from './components/Services';
import SkillSection from './components/SkillSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />

      <main>
        <Introduction />
        <About /> 
        <Services />
        <SkillSection />
        <PortfolioSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Features, Hero, Navbar, Newsletter } from './components';


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Newsletter />
    </div>
  );
};

export default App;
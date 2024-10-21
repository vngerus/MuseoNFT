import React from 'react';
import { Features, Hero, Navbar } from './components';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
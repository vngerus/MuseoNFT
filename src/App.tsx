import React from 'react';
import { Hero, Navbar } from './components';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
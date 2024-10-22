import React from 'react';
import { Features, Hero, Navbar } from './components';
import BGradient from './components/shared/BGradient';


const App: React.FC = () => {
  return (
    <div className='font-raleway'>
      <Navbar />
      <Hero />
      <Features />
      <BGradient />
    </div>
  );
};

export default App;
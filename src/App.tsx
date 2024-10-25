import React from 'react';
import { CTA, Features, Hero, Navbar, ProblemSolution } from './components';
import BGradient from './components/shared/BGradient';


const App: React.FC = () => {
  return (
    <div className='font-raleway'>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <CTA />
      <Features />
      <BGradient />
    </div>
  );
};

export default App;
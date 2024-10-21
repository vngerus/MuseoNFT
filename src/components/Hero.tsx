import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-white h-screen flex items-center" aria-labelledby="hero-heading" id='home'>
            <div className="container mx-auto text-center px-4">
                <div className="text-sm text-gray-500 mb-6 flex justify-center items-center">
                    <span className="mr-2" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v4.586l-1.707 1.707A1 1 0 003 16h14a1 1 0 00.707-1.707L16 12.586V8a6 6 0 00-6-6zm-3 9a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span>Museo NFT</span>
                </div>

                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-gray-900 mb-32">
                    Preservación Cultural y Ecológica de los Pueblos Indígenas.
                </h1>
            </div>
        </section>
    );
};

export default Hero;

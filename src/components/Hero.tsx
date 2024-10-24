import React from 'react';
import { forest } from '../assets';

const Hero: React.FC = () => {
    return (
        <section className="bg-white h-screen flex flex-col items-center relative" aria-labelledby="hero-heading" id="home">
            <div
                className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat z-0"
                style={{
                    backgroundImage: `url(${forest})`,
                    clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            ></div>

            <div className="container mx-auto px-4 sm:px-8 lg:pl-1 relative z-10 flex flex-col justify-center h-full lg:text-left text-center">
                <div className="text-sm text-gray-500 mb-6 flex items-center justify-center lg:justify-start">
                    <span className="mr-2" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v4.586L3.707 14.707A1 1 0 003 16h14a1 1 0 00.707-1.707L16 12.586V8a6 6 0 00-6-6zM7 11a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span className='font-bold uppercase'>Museo NFT</span>
                </div>

                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-gray-900 mb-8 max-w-full lg:max-w-[50%] mx-auto lg:mx-0">
                    Preservación Cultural y Ecológica de los Pueblos Indígenas.
                </h1>
            </div>

            <div
                className="lg:hidden w-full h-64 sm:h-80 bg-cover bg-no-repeat mb-4"
                style={{
                    backgroundImage: `url(${forest})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            ></div>
        </section>
    );
};

export default Hero;

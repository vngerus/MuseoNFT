import React from 'react';
import { nft1, nft2, nft3, nft4 } from '../assets';

const ProblemSolutionGrid: React.FC = () => {
    return (
        <section className="bg-white py-16 text-gray-900" aria-labelledby="problem-solution-heading">
            <div className="container mx-auto px-4 sm:px-8 lg:pl-1 relative z-10">
                <h2 id="problem-solution-heading" className="text-sm text-gray-500 mb-6 flex items-center justify-center lg:justify-start">
                    <span className="mr-2" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v4.586L3.707 14.707A1 1 0 003 16h14a1 1 0 00.707-1.707L16 12.586V8a6 6 0 00-6-6zM7 11a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span className="font-bold uppercase">Problemas y Soluciones</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                    <div className="p-6 bg-gray-100 text-gray-900 rounded-lg shadow-lg lg:text-left" aria-labelledby="biodiversidad-heading">
                        <img
                            src={nft1}
                            alt="Imagen representativa de la pérdida de biodiversidad"
                            className="w-28 h-28 mx-auto mb-4 animate-slide-right"
                        />
                        <h3 id="biodiversidad-heading" className="text-xl font-bold mb-2">Pérdida de Biodiversidad</h3>
                        <p className="text-gray-600">
                            Muchas regiones indígenas sufren la explotación de recursos y la pérdida de biodiversidad debido a la deforestación y la industrialización.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-100 text-gray-900 rounded-lg shadow-lg lg:text-left" aria-labelledby="proteccion-heading">
                        <img
                            src={nft2}
                            alt="Imagen que representa protección en tiempo real"
                            className="w-28 h-28 mx-auto mb-4 animate-slide-right"
                        />
                        <h3 id="proteccion-heading" className="text-xl font-bold mb-2">Protección en Tiempo Real</h3>
                        <p className="text-gray-600">
                            Con tecnologías IoT y geolocalización, ICP permite monitorear los territorios indígenas en tiempo real, protegiendo los ecosistemas.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-100 text-gray-900 rounded-lg shadow-lg lg:text-left" aria-labelledby="culturas-heading">
                        <img
                            src={nft3}
                            alt="Imagen representativa de la desaparición de culturas y tradiciones"
                            className="w-28 h-28 mx-auto mb-4 animate-slide-right"
                        />
                        <h3 id="culturas-heading" className="text-xl font-bold mb-2">Desaparición de Culturas y Tradiciones</h3>
                        <p className="text-gray-600">
                            Las culturas y tradiciones indígenas corren el riesgo de desaparecer debido a la falta de preservación y digitalización de su patrimonio cultural.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-100 text-gray-900 rounded-lg shadow-lg lg:text-left" aria-labelledby="nfts-heading">
                        <img
                            src={nft4}
                            alt="Imagen representativa de la digitalización y NFTs culturales"
                            className="w-28 h-28 mx-auto mb-4 animate-slide-right"
                        />
                        <h3 id="nfts-heading" className="text-xl font-bold mb-2">Digitalización y NFTs Culturales</h3>
                        <p className="text-gray-600">
                            Los NFTs culturales permiten preservar las tradiciones y el arte indígena en un formato digital, asegurando su autenticidad mediante la blockchain ICP.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSolutionGrid;

import React from 'react';

const ActionCall: React.FC = () => {
    return (
        <section className="relative min-h-screen py-16 text-white flex items-center justify-center" aria-label="Call to Action">
            <div className="container mx-auto relative z-50">
                <div className="bg-white rounded-3xl shadow-lg p-2 max-w-4xl mx-auto">
                    <div className="relative bg-gradient-to-br from-forestGreen to-black rounded-2xl p-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">Únete a Nuestra Misión</h2>
                        <p className="text-lg text-gray-200 mb-8">
                            Ayúdanos a preservar la cultura y el medio ambiente a través de la tecnología NFT y Blockchain. ¡Haz la diferencia hoy!
                        </p>
                        <a
                            href="#"
                            className="inline-block px-6 py-3 bg-white text-forestGreen font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
                        >
                            ¡Contribuye Ahora!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActionCall;

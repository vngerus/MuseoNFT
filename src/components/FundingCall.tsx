import React from 'react';

const FundingCall: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-terracottaRed to-black py-16 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">Llamado a la Acción</h2>
                <p className="text-lg mb-8">
                    Ya tenemos el 15% de $25,000 USDT para lanzar y escalar el primer Museo NFT Inmersivo para la preservación cultural y ecológica de los Pueblos Originarios del Mundo en ICP. ¡Únete a nosotros en esta misión!
                </p>
                <a
                    href="#"
                    className="inline-block px-6 py-3 bg-white text-terracottaRed font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
                >
                    Apóyanos Ahora
                </a>
            </div>
        </section>
    );
};

export default FundingCall;

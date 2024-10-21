import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-purple-700 to-gray-900 text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">SUSCRÍBETE A NUESTRO NEWSLETTER</h2>
                <p className="text-lg mb-8 max-w-md mx-auto">
                    Ayúdanos a lanzar y escalar el primer Museo NFT Inmersivo para la preservación cultural y ecológica de los Pueblos Originarios del Mundo en ICP.
                </p>
                <form className="flex justify-center items-center max-w-lg mx-auto overflow-hidden rounded-full bg-white shadow-lg">
                    <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        className="flex-grow p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                        type="submit"
                        className="bg-purple-700 text-white font-bold py-3 px-6 hover:bg-purple-600 transition duration-300"
                        style={{ borderRadius: '0 9999px 9999px 0' }}
                    >
                        Suscribirse
                    </button>
                </form>
                <div className="mt-4">
                    <label className="text-sm flex items-center justify-center">
                        <input type="checkbox" className="mr-2" />
                        Confirmo que acepto la política de privacidad
                    </label>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

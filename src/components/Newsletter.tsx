import React from 'react';

const Newsletter: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };

    return (
        <section className="relative py-16 text-white" id='newsteller'>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">SUSCRÍBETE A NUESTRO NEWSLETTER</h2>
                <p className="text-lg mb-8 max-w-md mx-auto text-gray-300">
                    Ayúdanos a lanzar y escalar el primer Museo NFT Inmersivo para la preservación cultural y ecológica de los Pueblos Originarios del Mundo en ICP.
                </p>
                <form
                    className="flex justify-center items-center max-w-lg mx-auto overflow-hidden rounded-full bg-white shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        className="flex-grow p-3 text-gray-900 focus:outline-none "
                        aria-label="Ingresa tu correo"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-black text-white font-bold py-2 px-4 mr-1 hover:bg-terracottaRed transition duration-300 border-2 rounded-full"
                        aria-label="Suscribirse al newsletter"
                    >
                        Suscribirse
                    </button>
                </form>
                <div className="mt-4">
                    <label className="text-sm flex items-center justify-center">
                        <input type="checkbox" className="mr-2" required aria-label="Acepto la política de privacidad" />
                        Confirmo que acepto la política de privacidad
                    </label>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

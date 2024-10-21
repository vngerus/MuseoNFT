import React from 'react';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

const BGradient: React.FC = () => {
    return (
        <section className="relative min-h-screen py-16 text-white" aria-label="Newsletter and footer section">
            {/* Gradientes y efectos visuales */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-br from-terracottaRed to-black opacity-90" aria-hidden="true" />
            <div className="absolute inset-0 bg-noise opacity-20" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-radial opacity-50" aria-hidden="true" />

            {/* Contenido del newsletter */}
            <div className="relative z-50">
                <Newsletter />
            </div>

            {/* Separador */}
            <div className="relative z-20 my-8">
                <hr className="border-t-2 border-gray-400 opacity-70 w-4/5 mx-auto" />
            </div>

            {/* Contenido del footer */}
            <div className="relative z-50 mt-8">
                <Footer />
            </div>
        </section>
    );
};

export default BGradient;

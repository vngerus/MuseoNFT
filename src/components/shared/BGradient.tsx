import React from 'react';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

const BGradient: React.FC = () => {
    return (
        <section className="relative py-16 text-white">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-br from-terracottaRed to-black opacity-90" />
            <div className="absolute inset-0 bg-noise opacity-20" />
            <div className="absolute inset-0 bg-gradient-radial opacity-50" />

            <div className="relative z-50">
                <Newsletter />
            </div>

            <div className="relative z-10 my-8">
                <hr className="border-t-2 border-gray-400 opacity-70 w-4/5 mx-auto" />
            </div>

            <div className="relative z-50 mt-8">
                <Footer />
            </div>
        </section>
    );
};

export default BGradient;

import React from 'react';

const Features: React.FC = () => {
    const items = [
        {
            title: "NFTs Marketplace",
            description: "Para autenticidad y trazabilidad.",
            imgSrc: "https://via.placeholder.com/150",
        },
        {
            title: "ICP Blockchain",
            description: "Para registros de identidad.",
            imgSrc: "https://via.placeholder.com/150",
        },
        {
            title: "Realidad Virtual y Aumentada",
            description: "Para experiencias inmersivas.",
            imgSrc: "https://via.placeholder.com/150",
        },
        {
            title: "Geolocalización en ICP",
            description: "Para proteger territorios y biodiversidad.",
            imgSrc: "https://via.placeholder.com/150",
        },
    ];

    return (
        <section className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-normal text-center mb-32 uppercase">Características Clave</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {index % 2 === 0 ? (
                                <>
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        className="w-full h-40 object-cover rounded-lg mb-2 order-3 lg:order-1"
                                    />
                                    <h3 className="text-xl font-bold uppercase text-center order-1 lg:order-2 ">{item.title}</h3>
                                    <p className="text-center font-semibold text-gray-600 order-2 lg:order-3">{item.description}</p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold uppercase text-center order-1 lg:order-1">{item.title}</h3>
                                    <p className="text-center font-semibold text-gray-600 order-2 lg:order-2">{item.description}</p>
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        className="w-full h-40 object-cover rounded-lg mt-2 order-3 lg:order-3"
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

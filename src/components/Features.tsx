import React, { useState, useEffect, useRef } from 'react';

interface FeatureItem {
    title: string;
    description: string;
    imgSrc: string;
}

const Features: React.FC = () => {
    const items: FeatureItem[] = [
        {
            title: "NFTs Marketplace",
            description: "Para autenticidad y trazabilidad.",
            imgSrc: "/src/assets/nft.jpg",
        },
        {
            title: "ICP Blockchain",
            description: "Para registros de identidad.",
            imgSrc: "/src/assets/icp.webp",
        },
        {
            title: "Realidad Virtual y Aumentada",
            description: "Para experiencias inmersivas.",
            imgSrc: "/src/assets/vrar.avif",
        },
        {
            title: "Geolocalización en ICP",
            description: "Para proteger territorios y biodiversidad.",
            imgSrc: "/src/assets/geo.jpg",
        },
    ];

    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index')!);
                        setVisibleItems((prev) => [...prev, index]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '50px', threshold: 0.1 }
        );

        imageRefs.current.forEach((img) => {
            if (img) {
                observer.observe(img);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="bg-gray-100 min-h-screen flex items-center justify-center" id='features'>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-normal text-left mb-32 uppercase">Características Clave</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <article key={index} className="flex flex-col items-start mb-8">
                            {index % 2 === 0 ? (
                                <>
                                    <img
                                        ref={(el) => (imageRefs.current[index] = el)}
                                        data-index={index}
                                        src={visibleItems.includes(index) ? item.imgSrc : undefined}
                                        alt={`Imagen de ${item.title}`}
                                        className="w-full h-40 object-cover rounded-lg mb-4 lg:mb-2 order-3 lg:order-1"
                                        loading="lazy"
                                    />
                                    <h3 className="text-xl font-bold uppercase text-left order-1 lg:order-2">{item.title}</h3>
                                    <p className="text-left font-semibold text-gray-600 order-2 lg:order-3">{item.description}</p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold uppercase text-left order-1 lg:order-1">{item.title}</h3>
                                    <p className="text-left font-semibold text-gray-600 order-2 lg:order-2">{item.description}</p>
                                    <img
                                        ref={(el) => (imageRefs.current[index] = el)}
                                        data-index={index}
                                        src={visibleItems.includes(index) ? item.imgSrc : undefined}
                                        alt={`Imagen de ${item.title}`}
                                        className="w-full h-40 object-cover rounded-lg mt-4 lg:mt-2 order-3 lg:order-3"
                                        loading="lazy"
                                    />
                                </>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(Features);

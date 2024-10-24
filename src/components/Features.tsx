import React, { useState, useEffect, useRef } from 'react';
import { geo, icp, nft, vrar } from '../assets';

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
            imgSrc: nft,
        },
        {
            title: "ICP Blockchain",
            description: "Para registros de identidad.",
            imgSrc: icp,
        },
        {
            title: "Realidad Virtual y Aumentada",
            description: "Para experiencias inmersivas.",
            imgSrc: vrar,
        },
        {
            title: "Geolocalización en ICP",
            description: "Para proteger territorios y biodiversidad.",
            imgSrc: geo,
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
                <h2 className="text-sm text-gray-500 mt-12 mb-12 sm:mt-16 sm:mb-16 flex items-center justify-center lg:justify-start">
                    <span className="mr-2" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v4.586L3.707 14.707A1 1 0 003 16h14a1 1 0 00.707-1.707L16 12.586V8a6 6 0 00-6-6zM7 11a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span className="font-bold uppercase">Características Clave</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <article key={index} className="flex flex-col items-start mb-8">
                            {index % 2 === 0 ? (
                                <>
                                    <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4 lg:mb-2 order-3 lg:order-1">
                                        <img
                                            ref={(el) => (imageRefs.current[index] = el)}
                                            data-index={index}
                                            src={visibleItems.includes(index) ? item.imgSrc : undefined}
                                            alt={`Imagen de ${item.title}`}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 lg:hover:scale-150 rounded-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase text-left order-1 lg:order-2">{item.title}</h3>
                                    <p className="text-left font-semibold text-gray-600 order-2 lg:order-3">{item.description}</p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold uppercase text-left order-1 lg:order-1">{item.title}</h3>
                                    <p className="text-left font-semibold text-gray-600 order-2 lg:order-2">{item.description}</p>
                                    <div className="relative w-full h-40 overflow-hidden rounded-lg mt-4 lg:mt-2 order-3 lg:order-3">
                                        <img
                                            ref={(el) => (imageRefs.current[index] = el)}
                                            data-index={index}
                                            src={visibleItems.includes(index) ? item.imgSrc : undefined}
                                            alt={`Imagen de ${item.title}`}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 lg:hover:scale-150 rounded-lg"
                                            loading="lazy"
                                        />
                                    </div>
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

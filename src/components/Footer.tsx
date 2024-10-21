import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold">Museo NFT Inmersivo</h4>
                        <p className="text-sm">Preservación cultural y ecológica.</p>
                    </div>

                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                            aria-label="Facebook de Museo NFT Inmersivo"
                            title="Síguenos en Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                            aria-label="Twitter de Museo NFT Inmersivo"
                            title="Síguenos en Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                            aria-label="Instagram de Museo NFT Inmersivo"
                            title="Síguenos en Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                            aria-label="LinkedIn de Museo NFT Inmersivo"
                            title="Conéctate en LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm">© 2024 Museo NFT Inmersivo™.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

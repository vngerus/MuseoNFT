import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className=" text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold">Museo NFT Inmersivo</h4>
                        <p className="text-sm">Preservación cultural y ecológica.</p>
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
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

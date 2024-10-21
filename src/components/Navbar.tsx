import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    const [active, setActive] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: 'INICIO', id: 'home' },
        { name: 'MISION', id: 'mision' },
        { name: 'CARACTERÍSTICAS', id: 'features' },
        { name: 'ÚNETE', id: 'newsteller' },
        { name: 'CONTACTO', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-none'} z-100`}>
            <div className="relative flex items-center justify-between max-w-6xl mx-auto p-4">

                <nav className="flex-grow flex items-center justify-center" aria-label="Main navigation">
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.id}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className={`cursor-pointer px-4 py-2 text-sm font-semibold ${active === item.id ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                                onSetActive={() => setActive(item.id)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>


                <button
                    className="lg:hidden block focus:outline-none z-50 absolute right-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {menuOpen ? (
                        <FiX className="text-3xl" aria-hidden="true" />
                    ) : (
                        <FiMenu className="text-3xl" aria-hidden="true" />
                    )}
                </button>

                <div
                    className={`fixed inset-0 bg-white z-40 flex items-center justify-center transition-all transform duration-500 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} `}
                >
                    <nav className="text-center" aria-label="Mobile navigation">
                        <ul className="space-y-8">
                            {navItems.map((item) => (
                                <li key={item.id} className="flex items-center justify-center">
                                    <Link
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className={`cursor-pointer text-xl font-semibold ${active === item.id ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                                        onClick={() => {
                                            setActive(item.id);
                                            setMenuOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const [active, setActive] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'HOME', id: 'home' },
        { name: 'STORY', id: 'story' },
        { name: 'ARTIST', id: 'artist' },
        { name: 'GALLERY', id: 'gallery' },
        { name: 'PRESS RELEASE', id: 'press-release' },
        { name: 'CONTACT', id: 'contact' },
    ];

    return (
        <div className="relative flex items-center justify-between max-w-6xl mx-auto p-4">
            <nav className="flex-grow flex items-center justify-center">
                {/* Desktop navigation */}
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`px-4 py-2 text-sm font-semibold ${active === item.id ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                            onClick={() => setActive(item.id)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </nav>

            <button
                className="lg:hidden block focus:outline-none z-50 absolute right-4"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <FiX className="text-3xl" />
                ) : (
                    <FiMenu className="text-3xl" />
                )}
            </button>

            {/* Popup for mobile navigation */}
            <div
                className={`fixed inset-0 bg-white z-40 flex items-center justify-center transition-all transform duration-500 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} `}
            >
                <nav className="text-center">
                    <ul className="space-y-8">
                        {navItems.map((item) => (
                            <li key={item.id} className="flex items-center justify-center">
                                <button
                                    className={`text-xl font-semibold ${active === item.id ? 'text-black' : 'text-gray-600 hover:text-black'
                                        }`}
                                    onClick={() => {
                                        setActive(item.id);
                                        setMenuOpen(false); // Close menu after selecting an item
                                    }}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

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

            <div className="h-full flex items-center">
                <img src="/src/assets/hand.png" alt="Logo" className="h-14 w-auto ml-4" />
            </div>

            <button
                className="lg:hidden block focus:outline-none z-50"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <FiX className="text-3xl" />
                ) : (
                    <FiMenu className="text-3xl" />
                )}
            </button>

            <nav
                className={`lg:flex lg:items-center lg:static lg:bg-transparent lg:shadow-none lg:p-0 lg:space-x-6 absolute right-0 top-full transition-none bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg px-8 py-2 min-h-[50px] ${menuOpen ? 'block' : 'hidden'} lg:block`}
            >
                <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-4 lg:space-y-0">
                    {navItems.map((item) => (
                        <li key={item.id} className="flex items-center">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-semibold mx-2 ${active === item.id ? 'bg-black text-white' : 'text-black hover:bg-gray-100'
                                    }`}
                                onClick={() => setActive(item.id)}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

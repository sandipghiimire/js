import React, { useEffect } from 'react';

const MyNavbar = () => {
    useEffect(() => {
        const toggleButton = document.getElementById('navbar-toggle');
        const menu = document.getElementById('navbar-menu');

        toggleButton.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }, []);

    return (
        <nav className="bg-green-600 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold">JobFinder</div>
                    <div className="hidden md:flex space-x-4">
                        {/* Menu items */}
                    </div>
                    <div className="md:hidden">
                        <button id="navbar-toggle" className="focus:outline-none">
                            <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden hidden" id="navbar-menu">
                {/* Mobile menu items */}
            </div>
        </nav>
    );
};

export default MyNavbar;

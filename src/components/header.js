import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-100 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                <div className="flex items-center">
                    <img src="/logo.png" alt="SaplingHub Logo" className="h-10 mr-2" />
                    <h1 className="text-2xl font-bold text-sapling-green">SaplingHub</h1>
                </div>
                <nav className="space-x-4">
                    <a href="#home" className="text-gray-800 hover:text-sapling-green">Plants</a>
                    <a href="#shop" className="text-gray-800 hover:text-sapling-green">For offices</a>
                    <a href="#blog" className="text-gray-800 hover:text-sapling-green">Plant care</a>
                    <a href="#about" className="text-gray-800 hover:text-sapling-green">About</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button 
                        className="text-gray-800 hover:text-sapling-green"
                        onClick={() => console.log('Search clicked')}
                    >
                        <i className="fas fa-search"></i>
                    </button>
                    <button 
                        className="text-gray-800 hover:text-sapling-green"
                        onClick={() => console.log('User profile clicked')}
                    >
                        <i className="fas fa-user"></i>
                    </button>
                    <button 
                        className="text-gray-800 hover:text-sapling-green"
                        onClick={() => console.log('Shopping cart clicked')}
                    >
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header;
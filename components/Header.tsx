
import React from 'react';
import PlayStoreButton from './PlayStoreButton';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-[#007BFF] to-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-xl">B</div>
        <span className="text-2xl font-bold tracking-tight">BingeTry</span>
    </div>
);

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Prevent the default anchor link behavior which can be problematic in SPAs
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-800">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="hover:text-white transition">Features</a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="hover:text-white transition">How It Works</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition">Contact</a>
          </nav>
          <div className="hidden md:block">
            <PlayStoreButton />
          </div>
          <div className="md:hidden">
             {/* Mobile menu button could go here */}
             <button className="p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

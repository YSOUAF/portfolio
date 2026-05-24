
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle resize to close menu on desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Expériences', href: '#experience' },
        { name: 'Projets', href: '#projects' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'py-3 bg-glass/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/5' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold tracking-tight text-white group" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-primary group-hover:drop-shadow-[0_0_8px_#00ffaa]">YS</span>.Portfolio
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-dim hover:text-primary transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="inline-flex px-5 py-2 rounded-full bg-primary text-dark font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Me Contacter
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors p-1"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col p-6 gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-medium text-text-dim hover:text-primary py-3 border-b border-white/5 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-4 w-full py-4 rounded-xl bg-primary text-dark font-bold text-center active:scale-95 transition-transform"
                    >
                        Me Contacter
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

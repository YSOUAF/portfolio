
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 border-t border-glass-border">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <a href="#" className="text-2xl font-bold text-white mb-2 block">
                        <span className="text-primary">YS</span>.Portfolio
                    </a>
                    <p className="text-text-dim text-sm">
                        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="w-12 h-12 rounded-full bg-glass flex items-center justify-center border border-glass-border hover:border-primary hover:text-primary transition-all overflow-hidden relative group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </a>
                    <a
                        href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-glass flex items-center justify-center border border-glass-border hover:border-primary hover:text-primary transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a
                        href={`https://github.com/${PERSONAL_INFO.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-glass flex items-center justify-center border border-glass-border hover:border-primary hover:text-primary transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>

                <div className="text-right">
                    <p className="text-sm font-medium text-text-dim">Contact Direct</p>
                    <p className="text-primary font-bold">{PERSONAL_INFO.phone}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

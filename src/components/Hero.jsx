
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#00ffaa33,transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="animate-slide-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                        Bienvenue sur mon portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Je suis <br />
                        <span className="text-gradient">{PERSONAL_INFO.name}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-dim mb-10 max-w-lg leading-relaxed">
                        {PERSONAL_INFO.title}. 
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#about"
                            className="px-8 py-4 rounded-xl bg-primary text-dark font-bold hover:bg-primary-dark transition-all duration-300 hover:scale-105"
                        >
                            En savoir plus
                        </a>
                        {/* <button
                            onClick={() => window.print()}
                            className="px-8 py-4 rounded-xl border border-glass-border bg-glass backdrop-blur-sm text-white font-bold hover:border-primary transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                            Télécharger CV
                        </button> */}
                    </div>
                </div>

                <div className="relative flex justify-center items-center">
                    <div className="relative w-70 h-70 md:w-80 md:h-80 rounded-3xl overflow-hidden glass-card p-4 animate-float">
                        <div className="w-full h-full rounded-2xl bg-dark-accent flex items-center justify-center overflow-hidden relative">
                            <img
                                src={PERSONAL_INFO.image}
                                alt={PERSONAL_INFO.name}
                                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
                        </div>
                        {/* Visual elements */}
                        <div className="absolute -top-0 -right-4 px-4 py-2 bg-primary rounded-xl flex items-center justify-center transform rotate-12 shadow-[0_10px_30px_rgba(0,255,170,0.4)] z-20">
                            <span className="text-dark font-black text-xs uppercase tracking-tighter">ENSAK Student</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
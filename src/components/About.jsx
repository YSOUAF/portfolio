
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gradient">À Propos de Moi</h2>
                        <div className="glass-card p-8 space-y-6">
                            <p className="text-lg text-text-dim leading-relaxed">
                                {PERSONAL_INFO.bio} Passionné par l'innovation durable, mon parcours à l'ENSA Khouribga m'a permis de développer une solide base technique en génie des procédés et de l'énergie.
                            </p>
                            <p className="text-lg text-text-dim leading-relaxed">
                                Mes expériences chez <span className="text-primary font-semibold">OCP Group</span> m'ont permis d'appliquer mes connaissances théoriques à des enjeux industriels réels, notamment le traitement des eaux et l'analyse énergétique.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <span className="text-sm font-medium">{PERSONAL_INFO.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    </div>
                                    <span className="text-sm font-medium">{PERSONAL_INFO.email}</span>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    onClick={() => window.print()}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:scale-105"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                    Télécharger mon CV
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="glass-card p-6 text-center space-y-2">
                            <div className="text-3xl font-bold text-primary">+5</div>
                            <div className="text-xs text-text-dim uppercase tracking-wider">Responsabilités</div>
                        </div>
                        <div className="glass-card p-6 text-center space-y-2 ">
                            <div className="text-3xl font-bold text-primary">2</div>
                            <div className="text-xs text-text-dim uppercase tracking-wider">Stages OCP</div>
                        </div>
                        <div className="glass-card p-6 text-center space-y-2">
                            <div className="text-3xl font-bold text-primary">4+</div>
                            <div className="text-xs text-text-dim uppercase tracking-wider">Certificats</div>
                        </div>
                        <div className="glass-card p-6 text-center space-y-2 ">
                            <div className="text-3xl font-bold text-primary">10+</div>
                            <div className="text-xs text-text-dim uppercase tracking-wider">Compétences</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

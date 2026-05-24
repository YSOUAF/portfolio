
import React from 'react';
import { LEADERSHIP } from '../constants';

const Leadership = () => {
    return (
        <section className="py-24 bg-dark-accent/10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">Parascolaire & Leadership</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {LEADERSHIP.map((item, index) => (
                        <div key={index} className="glass-card p-8 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <div className="text-primary text-xs font-bold mb-2 uppercase tracking-tighter">{item.duration}</div>
                            <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.role}</h3>
                            <div className="text-primary/80 text-sm font-medium mb-4">{item.org}</div>
                            <p className="text-text-dim text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;

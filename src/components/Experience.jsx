
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-dark-accent/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">Expériences Professionnelles</h2>

                <div className="space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 border-l-2 border-primary/30 group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark border-2 border-primary group-hover:bg-primary transition-colors duration-300"></div>

                            <div className="glass-card p-8 group-hover:border-primary/50">
                                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                                        <div className="text-primary font-medium">{exp.company} | {exp.location}</div>
                                    </div>
                                    <div className="text-sm font-semibold text-text-dim bg-white/5 py-1 px-3 rounded-full self-start">
                                        {exp.duration}
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-text-dim">
                                            <span className="text-primary mt-1.5 flex-shrink-0">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
                                                    <circle cx="6" cy="6" r="2" fill="currentColor" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

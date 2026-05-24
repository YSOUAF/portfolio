
import React from 'react';
import { EDUCATION, CERTIFICATES } from '../constants';
import { FileText, GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">Formation & Certifications</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm"><GraduationCap/></span>
                            Parcours Académique
                        </h3>
                        {EDUCATION.map((edu, index) => (
                            <div key={index} className="glass-card p-6 border-l-4 border-l-primary">
                                <div className="text-sm font-bold text-primary mb-1">{edu.duration}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                                <div className="text-text-dim">{edu.institution}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm"><FileText/> </span>
                            Certificats & Formations
                        </h3>
                        <div className="grid gap-4">
                            {CERTIFICATES.map((cert, index) => (
                                <div key={index} className="glass-card p-6 flex flex-col sm:flex-row gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-dark-accent flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-3-3 1.41-1.41L12 12.17l4.59-4.59L18 9l-6 6z" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-5-5z" /><path d="M14 2v5h5" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{cert.title}</h4>
                                        <div className="text-primary text-sm font-medium mb-1">{cert.issuer}</div>
                                        <p className="text-text-dim text-xs leading-relaxed">{cert.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

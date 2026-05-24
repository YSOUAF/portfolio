
import React from 'react';
import { SKILLS, LANGUAGES } from '../constants';
import { Zap, Droplets, BarChart, Code } from 'lucide-react';

const Skills = () => {
    const categories = [
        { title: 'Génie des Procédés ', key: 'process_energy', icon: Zap },
        { title: 'Énergie & Thermique', key: 'energy_thermique', icon: Zap },
        { title: 'Eau & Environnement', key: 'water_env', icon: Droplets },
        { title: 'Simulation & Modélisation', key: 'simulation', icon: BarChart },
        { title: 'Programmation & Outils', key: 'software', icon: Code },
    ];

    return (
        <section id="skills" className="py-24 bg-dark-accent/30">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">Compétences Techniques</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {categories.map((cat, index) => (
                        <div key={index} className="glass-card p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-primary">
                                    <cat.icon size={28} />
                                </span>
                                <h3 className="text-xl font-bold">{cat.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {SKILLS[cat.key].map((skill, i) => (
                                    <div key={i} className="group py-2 px-4 bg-white/5 border border-glass-border rounded-lg hover:border-primary transition-all flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary"></div>
                                        <span className="text-sm font-medium text-text-dim group-hover:text-white">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 text-center">Langues</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {LANGUAGES.map((lang, index) => (
                            <div key={index} className="glass-card p-6 text-center group">
                                <div className="text-primary font-bold text-lg mb-1">{lang.name}</div>
                                <div className="text-sm text-text-dim">{lang.level}</div>
                                {/* Progress bar simulation */}
                                <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full bg-primary ${lang.name === 'Arabe' ? 'w-full' : 'w-4/5'}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

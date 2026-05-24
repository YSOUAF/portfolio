
import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">Projets Académiques</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="glass-card flex flex-col h-full group overflow-hidden">
                            <div className="h-48 bg-dark-accent flex items-center justify-center relative overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform duration-500 opacity-50"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                    </>
                                )}
                                <div className="absolute bottom-4 left-6 py-1 px-3 bg-dark/80 backdrop-blur-sm rounded-full text-[10px] font-bold text-primary border border-primary/20">PROJET {index + 1}</div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-text-dim text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold py-1 px-2 bg-primary/10 text-primary border border-primary/20 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

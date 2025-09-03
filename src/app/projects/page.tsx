/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projects as projectsData } from '@/lib/data';

const projects = projectsData.items;
const categories = projectsData.categories;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  // Convert readonly data into a mutable array for state management
  const [filteredProjects, setFilteredProjects] = useState(Array.from(projects));

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(Array.from(projects));
    } else {
      setFilteredProjects(Array.from(projects.filter(project => project.category === category)));
    }
  };

  return (
    <main>
      <Navigation />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="section-title" dangerouslySetInnerHTML={{ __html: projectsData.header.titleHtml }} />
          <p className="page-subtitle">{projectsData.header.subtitle}</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilter(category.id)}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="project-overlay">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-link text-6xl"></i>
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-category">{project.category.toUpperCase()}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-duration">
                    <i className="fas fa-clock"></i>
                    {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

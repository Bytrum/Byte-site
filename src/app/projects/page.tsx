'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'GhostFreakOS',
    description: 'Custom Linux distribution optimized for new users who want to try arch linux with no bloat and security professionals with pre-installed development tools.',
    category: 'linux',
    tags: ['Arch Linux', 'Custom', 'Security'],
    year: '2025',
    duration: '1 month',
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with biometric authentication and real-time transaction monitoring.',
    category: 'Dev',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    year: '2024',
    duration: '4 months',
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'AI-Powered Dashboard',
    description: 'Intelligent dashboard with machine learning capabilities for data visualization and predictive analytics.',
    category: 'ai',
    tags: ['Vue.js', 'Python', 'TensorFlow'],
    year: '2025',
    duration: '6 months',
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'ZenShell',
    description: 'A Linux Shell Built in C++ and configurd by lua',
    category: 'dev',
    tags: ['C++', 'Shell', 'Lua'],
    year: '2025',
    duration: '1 month',
    image: '/api/placeholder/400/300'
  },
  {
    id: 5,
    title: 'Real-time Chat Application',
    description: 'Scalable chat application with real-time messaging, file sharing, and video calling capabilities.',
    category: 'dev',
    tags: ['Socket.io', 'Express', 'PostgreSQL'],
    year: '2023',
    duration: '5 months',
    image: '/api/placeholder/400/300'
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'pentest', label: 'Pentesting' },
  { id: 'linux', label: 'Linux Distros' },
  { id: 'dev', label: 'Linux and dev tools' },
  { id: 'ai', label: 'AI & ML' }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <main>
      <Navigation />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">
            <span className="byte-glow">Byte</span> Projects
          </h1>
          <p className="page-subtitle">
            Discover our innovative solutions and cutting-edge applications
          </p>
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
                  <div className="project-overlay">
                    <Link href={`/projects/${project.id}`} className="btn btn-outline">
                      View Details
                    </Link>
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

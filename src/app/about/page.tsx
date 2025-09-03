'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { about } from '@/lib/data';

const values = about.values;
const timeline = about.timeline;
const technologies = about.technologies;

export default function About() {
  return (
    <main>
      <Navigation />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="section-title" dangerouslySetInnerHTML={{ __html: about.header.titleHtml }} />
          <p className="page-subtitle">
            {about.header.subtitle}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-subtitle">{about.mission.title}</h2>
              {about.mission.paragraphs.map((p, i) => (
                <p key={i} className="mission-description">{p}</p>
              ))}
              <Link href={about.mission.cta.href} className="btn btn-primary">
                <span className="btn-glow"></span>
                {about.mission.cta.label}
              </Link>
            </div>
            <div className="mission-visual">
              <div className="mission-image">
                  <i className={about.mission.iconClass}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-subtitle">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
          </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <h2 className="section-subtitle">Our Story</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <div className="container">
          <h2 className="section-subtitle">Our Technology Stack</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech}
          </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

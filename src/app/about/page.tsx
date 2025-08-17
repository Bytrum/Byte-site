'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const values = [
  {
    icon: 'fas fa-lightbulb',
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
  },
  {
    icon: 'fas fa-users',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and foster a culture of open communication and mutual respect.'
  },
  {
    icon: 'fas fa-star',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to user experience.'
  },
  {
    icon: 'fas fa-heart',
    title: 'Passion',
    description: 'Our team is passionate about technology and committed to creating meaningful digital experiences.'
  }
];

const timeline = [
  {
    year: '2025',
    title: 'The Birth of Byte',
    description: 'Byte was founded with a vision to revolutionize digital experiences through innovation and cutting-edge technology.'
  }
];

const technologies = [
  'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Vue.js', 'Flutter', 'React Native',
  'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Firebase', 'TensorFlow', 'Figma'
];

export default function About() {
  return (
    <main>
      <Navigation />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">
            About <span className="byte-glow">Byte</span>
          </h1>
          <p className="page-subtitle">
            We are a passionate team of digital innovators dedicated to creating exceptional experiences through technology and creativity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-subtitle">Our Mission</h2>
              <p className="mission-description">
                At <span className="byte-glow">Byte</span>, we believe that technology should enhance human experiences, not complicate them. Our mission is to create digital solutions that are not only functional and beautiful but also intuitive and meaningful.
              </p>
              <p className="mission-description">
                We work closely with our clients to understand their unique challenges and goals, then craft tailored solutions that drive real business value and user satisfaction.
              </p>
              <Link href="/contact" className="btn btn-primary">
                <span className="btn-glow"></span>
                Get In Touch
              </Link>
            </div>
            <div className="mission-visual">
              <div className="mission-image">
                  <i className="fas fa-rocket"></i>
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

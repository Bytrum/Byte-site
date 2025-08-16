'use client';

import {Avatar, AvatarGroup, AvatarIcon} from "@heroui/avatar";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const teamMembers = {
  Owner: [
    {
      name: 'Bad Request',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years of experience in digital innovation and technology strategy.',
      avatar: 'https://github.com/om7iux.png',
      social: {
        github: 'https://github.com/om7iux',
        linkedin: '#',    
        discord: '#',
        instagram: '#',
        portfolio: '#'
      }
    }
  ],
  Managers: [
    {
      name: 'Example Manager',
      role: 'Manager ',
      bio: 'Manager passionate about clean code and user experience.',
      avatar: '/api/placeholder/200/200',
      social: {
        linkedin: '#',    
        github: '#',
        discord: '#',
        instagram: '#',
        portfolio: '#'
      }
    }
  ],
  Developers: [
    {
      name: 'Example Developer',
      role: 'Lead Developer',
      bio: 'Developer with a passion for intuitive and beautiful user interfaces.',
      avatar: '/api/placeholder/200/200',
      social: {
        linkedin: '#',
        discord: '#',
        instagram: '#',
        portfolio: '#'
      },
    }
  ]
};

const stats = [
  { number: '5+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
];

export default function Team() {
  return (
    <main>
      <Navigation />
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">
            Meet the <span className="byte-glow">Byte</span> Team
          </h1>
          <p className="page-subtitle">
            Our talented team of innovators, creators, and problem solvers
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-subtitle">Owners</h2>
          <div className="team-grid">
            {teamMembers.Owner.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-avatar">
                  <Avatar isBordered radius="full" src={member.avatar}  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="social-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="social-link">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {member.social.discord && (
                      <a href={member.social.discord} className="social-link">
                        <i className="fab fa-discord"></i>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {member.social.portfolio && (
                      <a href={member.social.portfolio} className="social-link">
                        <i className="fas fa-globe"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-subtitle">Team Managers</h2>
          <div className="team-grid">
            {teamMembers.Managers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-avatar">
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="social-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {member.social.discord && (
                      <a href={member.social.discord} className="social-link">
                        <i className="fab fa-discord"></i>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {member.social.portfolio && (
                      <a href={member.social.portfolio} className="social-link">
                        <i className="fas fa-globe"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-subtitle">Dev Team</h2>
          <div className="team-grid">
            {teamMembers.Developers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-avatar">
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="social-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {member.social.discord && (
                      <a href={member.social.discord} className="social-link">
                        <i className="fab fa-discord"></i>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {member.social.portfolio && (
                      <a href={member.social.portfolio} className="social-link">
                        <i className="fas fa-globe"></i>
                      </a>
                    )}
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

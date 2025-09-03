'use client';

import { Avatar,  AvatarImage } from "@/components/ui/avatar"
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { team as teamData } from '@/lib/data';

const teamMembers = teamData.groups;
const stats = teamData.stats;

export default function Team() {
  return (
    <main>
      <Navigation />
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="section-title" dangerouslySetInnerHTML={{ __html: teamData.header.titleHtml }} />
          <p className="page-subtitle">
            {teamData.header.subtitle}
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
                  <Avatar className="size-40">
                  <AvatarImage src={member.avatar} />
                  </Avatar>
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


      {/* Dev Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-subtitle">Dev Team</h2>
          <div className="team-grid">
            {teamMembers.Developers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-avatar">
                  <Avatar className="size-40">
                  <AvatarImage src={member.avatar} />
                  </Avatar>
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
      {/* Manegers Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-subtitle">Team Managers</h2>
          <div className="team-grid">
            {teamMembers.Managers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-avatar">
                  <Avatar className="size-40">
                  <AvatarImage src={member.avatar} />
                  </Avatar>
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
      <Footer />
    </main>
  );
}
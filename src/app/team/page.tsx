'use client';

import { Avatar,  AvatarImage } from "@/components/ui/avatar"
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const teamMembers = {
  Owner: [
    {
      name: 'Omar Sameh',
      role: 'CEO & Founder & Cybersecurity Expert',
      bio: 'Visionary leader with 10+ years of experience in digital innovation and technology strategy.',
      avatar: 'https://github.com/om7iux.png',
      social: {
        github: 'https://github.com/om7iux',
        linkedin: 'https://www.linkedin.com/in/om7iux/',
        discord: 'https://discord.com/users/1128989531346059364',
        instagram: '',
        portfolio: ''
      }
    }
  ],
  Managers: [
    {
      name: 'Basmala Mahmoud',
      role: 'Social Media Manager',
      bio: 'Creative social media expert with a talent for engaging content and community building.',
      avatar: 'https://github.com/basmalamahmoud32010-ai.png',
      social: {
        github: 'https://github.com/basmalamahmoud32010-a',
        linkedin: '',
        discord: '',
        instagram: '',
        portfolio: ''
      },
    }
  ],
  // Added This TO Don't Get TS Interface error 
  Developers: [
    {
      name: 'Asaad Zein',
      role: 'Supervisor & Ai Developer',
      bio: 'Experienced software engineer passionate about clean code and user experience.',
      avatar: 'https://github.com/asaadzx.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/asaad-zx/',
        github: 'https://github.com/asaadzx ',
        discord: 'https://discord.com/users/913099850982248528',
        instagram: 'https://www.instagram.com/asaad.zein.1/',
        portfolio: 'https://asaadzx.is-a.dev/'
      }
    },
    {
      name: 'Abd Elaziz Mohamed',
      role: 'Cybersecurity Expert',
      bio: 'Detail-oriented cybersecurity specialist with a knack for identifying vulnerabilities and enhancing system security.',
      avatar: 'https://github.com/haunter4e.png',
      social: {
        github: 'https://github.com/haunter4e',
        linkedin: '',
        discord: 'https://discord.com/users/939600444961996810',
        instagram: 'https://www.instagram.com/k.i.l.lq/',
        portfolio: ''
      }
    },
    {
      name: 'Ahmed Shafik',
      role: 'Supervisor & Ai Developer & Cybersecurity Expert',
      bio: 'Skilled developer with a passion for intuitive and beautiful user interfaces.',
      avatar: 'https://github.com/Lazysniperz.png',
      social: {
        github: 'https://github.com/Lazysniperz',
        discord: 'https://discord.com/users/1259926188265308372',
        instagram: 'https://www.instagram.com/ssniperx/',
        portfolio: 'https://ghosty.is-a.dev'
      },
    },
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
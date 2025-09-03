/* eslint-disable @next/next/no-img-element */
'use client';

/**
 * Byte Homepage Component
 * 
 * This is the main homepage of the Byte website. It features:
 * - Word-by-word welcome text animation
 * - Services showcase
 * - Featured projects preview
 * - Team preview section
 * 
 * The component uses React hooks for state management and animations.
 */
import { BlurFade } from "@/components/magicui/blur-fade";
import { Avatar,  AvatarImage } from "@/components/ui/avatar"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";


import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { home } from '@/lib/data';

export default function Home() {
  // State management for animations and interactions
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Controls word-by-word animation

  // Welcome text that appears word by word (centralized in data.ts)
  const welcomeWords = home.hero.welcomeWords;

  // Effect for word-by-word welcome text animation
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWordIndex(prev => {
        if (prev < welcomeWords.length - 1) {
          return prev + 1;
        } else {
          clearInterval(wordTimer);
          return prev;
        }
      });
    }, 200); // 800ms delay between each word

    return () => clearInterval(wordTimer);
  },);

  // Function to render syntax highlighted code in the terminal
  return (
    <main>
      {/* Navigation component - appears on all pages */}
      <Navigation />
      {/* Hero Section - Main landing area with welcome text and terminal */}
      <section className="hero">
        <div className="hero-container">
          <BlurFade delay={0.01} inView>
          <div className="hero-content">
            {/* Animated welcome title that appears word by word */}
            <h2 className="hero-title">
              {welcomeWords.map((word, index) => (
                <span
                  key={index}
                  className={`${index <= currentWordIndex ? 'word-visible' : 'word-hidden'} ${
                    word === 'byte' ? 'glow-text' : ''
                  }`}
                >
                  {word}
                  {index < welcomeWords.length - 1 && ' '}
                </span>
              ))}
            </h2>
            <p className="hero-subtitle">{home.hero.subtitle}</p>
            <div className="hero-buttons">
              <Link href={home.hero.primaryCta.href} className="btn btn-primary">
                <span className="btn-glow"></span>
                {home.hero.primaryCta.label}
              </Link>
              <Link href={home.hero.secondaryCta.href} className="btn btn-secondary">
                {home.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          </BlurFade>

          {/* Interactive Terminal - Byte Team Project Setup */}
          <BlurFade delay={0.02} inView>
              <div className="hidden lg:block">
                <Terminal>
                  <TypingAnimation className="text-blue-400 font-bold">&gt; byte-team --init --project &quot;amazing-collaboration&quot;</TypingAnimation>
                  
                  <AnimatedSpan className="text-green-400">
                    <span>🚀 Byte Team - Initializing Project Environment</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="text-cyan-400">
                    <span>⚡ Loading team capabilities...</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-green-400">
                    <span>✅ Cybersecurity experts: Ready</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-green-400">
                    <span>✅ Linux specialists: Ready</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-green-400">
                    <span>✅ Documentation wizards: Ready</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-green-400">
                    <span>✅ Development ninjas: Ready</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-yellow-400">
                    <span>🔄 Syncing team knowledge base...</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-blue-400">
                    <span>📚 Loading: Security protocols, Linux distros, Tech docs</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-purple-400">
                    <span>🎯 Setting up collaboration workspace...</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-green-400">
                    <span>✅ Team communication: Established</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-green-400">
                    <span>✅ Project repository: Configured</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-green-400">
                    <span>✅ Development tools: Deployed</span>
                  </AnimatedSpan>
            
                  <AnimatedSpan className="text-cyan-400">
                    <span>🌟 Byte Team is now ready to create amazing projects together!</span>
                  </AnimatedSpan>
            
                  <TypingAnimation className="text-yellow-400 font-bold">
                    🎉 Project environment initialized successfully!
                  </TypingAnimation>
            
                  <TypingAnimation className="text-green-400">
                    Ready to build, secure, and innovate with Byte Team! 🚀
                  </TypingAnimation>
                </Terminal>
    </div>
          </BlurFade>
        </div>
      </section>

      {/* Services Section - Showcases Byte's core offerings */}
      <BlurFade delay={0.03} inView>
      <section className="services">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            {home.services.map((svc, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">
                  <i className={svc.iconClass}></i>
                </div>
                <h4 className="text-lg font-bold">{svc.title}</h4>
                {svc.description ? (
                  <p className="text-sm">{svc.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
      </BlurFade>

      {/* Featured Projects Section - Preview of Byte's recent work */}
      <BlurFade delay={0.04} inView>
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {home.featuredProjects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div className="project-image">
                  {proj.imageUrl ? (
                    <img src={proj.imageUrl} alt={proj.name} className="w-fit rounded-lg" />
                  ) : null}
                  <div className="project-overlay">
                    <Link href={proj.detailsHref} className="btn btn-outline">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-category">{proj.category}</span>
                    <span className="project-year">{proj.year}</span>
                  </div>
                  <h3>{proj.name}</h3>
                  <p>{proj.summary}</p>
                  <div className="project-tags">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-duration">
                    <i className="fas fa-clock"></i>
                    {proj.durationText}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </BlurFade>

      {/* Team Preview */}
      <BlurFade delay={0.05} inView>
      <section className="">
        <div className="">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {home.teamPreview.map((member, idx) => (
              <div key={idx} className="team-member">
                <div className="member-avatar">
                  <Avatar className="size-40">
                    <AvatarImage src={member.avatarUrl} />
                  </Avatar>
                </div>
                <h3>{member.name}</h3>
                <h3>{member.role}</h3>
              </div>
            ))}
          </div>
          <div className="text-center pt-32">
            <Link href="/team" className="btn btn-primary">
              <span className="btn-glow"></span>
              View Full Team
            </Link>
          </div>
        </div>
      </section>
      </BlurFade>
      <Footer />
    </main>
  );
}

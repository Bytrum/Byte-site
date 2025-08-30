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

export default function Home() {
  // State management for animations and interactions
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Controls word-by-word animation

  // Welcome text that appears word by word
  const welcomeWords = ['Welcome', 'to', 'byte'];

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
            <p className="hero-subtitle">
              We are a team of digital innovators, creators, and problem solvers
            </p>
            <div className="hero-buttons">
              <Link href="/projects" className="btn btn-primary">
                <span className="btn-glow"></span>
                View Our Work
              </Link>
              <Link href="/team" className="btn btn-secondary">
                Meet the Team
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
            {/* Custom Linux Distributions and Applications Card */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fab fa-linux"></i>
              </div>
            <h4 className="text-lg font-bold">
              Building Custom Linux Distributions and Applications
            </h4>
            </div>
            {/* Developer Tools and Utilities Card */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tools"></i>
              </div>
            <h4 className="text-lg font-bold">
              Maintaining and Developing OpenSource Projects and Developer Tools
            </h4>
            <p className="text-sm">
              {/* Add discription */}
            </p>
            </div>
            {/* Custom AI Models and Machine Learning Card */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-brain"></i>
              </div>
            <h4 className="text-lg font-bold">
              Building Custom AI Models and Machine Learning Solutions
            </h4>
            </div>
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
            {/* GhostFreakOS - Custom Linux Distribution */}
            <div className="project-card">
              <div className="project-image">
                <img src="https://i.ibb.co/8g1bXrvy/GSH.png" alt="GhostFreakOS" className="w-fit rounded-lg" />
                <div className="project-overlay">
                  <Link href="" className="btn btn-outline">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">LINUX DISTRO</span>
                  <span className="project-year">2025</span>
                </div>
                <h3>GhostFreakOS</h3>
                <p>Custom Linux distribution optimized for new users who want to try arch linux with no bloat and security professionals with pre-installed development tools.</p>
                <div className="project-tags">
                  <span className="tag">Arch Linux</span>
                  <span className="tag">Custom</span>
                  <span className="tag">Security</span>
                </div>
                <div className="project-duration">
                  <i className="fas fa-clock"></i>
                  1 month
                </div>
              </div>
            </div>

            {/* ZenShell - Linux Shell */}
            <div className="project-card">
              <div className="project-image">
                {/* Placeholder image */}
                <div className="project-overlay">
                  <Link href="/projects" className="btn btn-outline">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">DEV TOOL</span>
                  <span className="project-year">2025</span>
                </div>
                <h3>ZenShell</h3>
                <p>A Linux Shell Built in C++ and configured by Lua for enhanced development workflow and automation.</p>
                <div className="project-tags">
                  <span className="tag">C++</span>
                  <span className="tag">Shell</span>
                  <span className="tag">Lua</span>
                </div>
                <div className="project-duration">
                  <i className="fas fa-clock"></i>
                  1 month
                </div>
              </div>
            </div>  
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

            {/* Ahmed Shafik */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar className="size-40">
                  <AvatarImage src="https://github.com/Lazysniperz.png" />
                  </Avatar>
              </div>
              <h3>Ahmed Shafik</h3>
              <h3>Software Engineer and Manager</h3>
            </div>

            {/* Omar Sameh */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar className="size-40">
                  <AvatarImage src="https://github.com/om7iux.png" />
                  </Avatar>
              </div>
              <h4>Omar Sameh</h4>
              <h3>Ceo & Founder </h3>
            </div>  
            
            {/* Asaad Zein */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar className="size-40">
                  <AvatarImage src="https://github.com/asaadzx.png" />
                  </Avatar>
              </div>
              <h3>Asaadzx</h3>
              <h3>Software Engineer and Manager</h3>
            </div>

            
            {/* Abd Elaziz */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar className="size-40">
                  <AvatarImage src="https://github.com/haunter4e.png" />
                  </Avatar>
              </div>
              <h3>Abd Elaziz</h3>
              <h3>Cyber Security Agent</h3>
            </div>

            {/* Basmala mahmoad */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar className="size-40">
                  <AvatarImage src="https://github.com/basmalamahmoud32010-ai.png" />
                  </Avatar>
              </div>
              <h3>Basmala Mahmoad</h3>
              <h3>Social Media Manager</h3>
            </div>
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

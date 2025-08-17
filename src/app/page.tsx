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
import {Avatar} from "@heroui/avatar";
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
  const welcomeWords = ['Welcome', 'to', 'Byte'];

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
            <h1 className="hero-title">
              {welcomeWords.map((word, index) => (
                <span
                  key={index}
                  className={`${index <= currentWordIndex ? 'word-visible' : 'word-hidden'} ${
                    word === 'Byte' ? 'glow-text' : ''
                  }`}
                >
                  {word}
                  {index < welcomeWords.length - 1 && ' '}
                </span>
              ))}
            </h1>
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

          {/* Interactive Terminal - Simulates a real terminal with syntax highlighting */}
          <BlurFade delay={0.02} inView>
              <div className="w-full h-200 overflow-auto flex items-center justify-center">
                <Terminal>
                  <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>
                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Preflight checks.</span>
                    </AnimatedSpan>

                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Verifying framework. Found Next.js.</span>
                    </AnimatedSpan>
            
                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Validating Tailwind CSS.</span>
                    </AnimatedSpan>
            
                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Validating import alias.</span>
                    </AnimatedSpan>
            
                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Writing components.json.</span>
                    </AnimatedSpan>
            
                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Checking registry.</span>
                    </AnimatedSpan>
            
                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Updating tailwind.config.ts</span>
                    </AnimatedSpan>
            
                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Updating app/globals.css</span>
                    </AnimatedSpan>
            
                    <AnimatedSpan className="text-muted-foreground">
                      <span>✔ Installing dependencies.</span>
                    </AnimatedSpan>
            
                    <AnimatedSpan className="text-muted-foreground">
                      <span>ℹ Updated 1 file:</span>
                      <span className="pl-2">- lib/utils.ts</span>
                    </AnimatedSpan>
            
                    <TypingAnimation className="text-muted-foreground">
                      Success! Project initialization completed.
                    </TypingAnimation>
            
                    <TypingAnimation className="text-muted-foreground">
                      You may now add components.
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
            {/* Cybersecurity Services Card */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Cybersecurity Services</h3>
              <p>Comprehensive security solutions including penetration testing, vulnerability assessments, and security consulting to protect your digital assets.</p>
            </div>
            {/* Technical Documentation and Blogs Card */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-blog"></i>
              </div>
              <h3>Blogs and Docs</h3>
              <p>Technical documentation, tutorials, and educational content to help developers and teams stay updated with the latest technologies.</p>
            </div>
            {/* Custom Linux Distributions and Applications Card */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fab fa-linux"></i>
              </div>
              <h3>Linux Distro and Apps</h3>
              <p>Custom Linux distributions and specialized applications built for specific use cases and optimized performance.</p>
            </div>
            {/* Developer Tools and Utilities Card */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Tools To Help Developers</h3>
              <p>Development utilities, automation scripts, and productivity tools designed to streamline the development workflow.</p>
            </div>
            {/* Custom AI Models and Machine Learning Card */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>AI Models</h3>
              <p>Custom artificial intelligence models and machine learning solutions tailored to solve specific business problems.</p>
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
                {/* Placeholder image */}
                <div className="project-overlay">
                  <Link href="https://i.ibb.co/8g1bXrvy/GSH.png" className="btn btn-outline">
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
      <section className="team-preview">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">

            {/* Omar Sameh */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar src="https://github.com/om7iux.png"/>
              </div>
              <h3>Omar Sameh</h3>
              <h3>Founder </h3>
            </div>  

            {/* Asaad Zein */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar src="https://github.com/asaadzx.png"/>
              </div>
              <h3>Asaadzx</h3>
              <h3>Software Engineer and Manager</h3>
            </div>

            {/* Ahmed Shafik */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar src="https://github.com/Lazysniperz.png"/>
              </div>
              <h3>Ahmed Shafik</h3>
              <h3>Software Engineer and Manager</h3>
            </div>
            
            {/* Basmala mahmoad */}
            <div className="team-member">
              <div className="member-avatar">
                  <Avatar src="https://github.com/basmalamahmoud32010-ai.png"/>
              </div>
              <h3>Basmala Mahmoad</h3>
              <h3>Social Media Manager</h3>
            </div>
          </div>
          <div className="text-center">
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

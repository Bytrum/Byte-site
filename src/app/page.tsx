'use client';

/**
 * Byte Homepage Component
 * 
 * This is the main homepage of the Byte website. It features:
 * - Word-by-word welcome text animation
 * - Interactive C++ terminal simulation
 * - Services showcase
 * - Featured projects preview
 * - Team preview section
 * 
 * The component uses React hooks for state management and animations.
 */

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  // State management for animations and interactions
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Controls word-by-word animation
  const [showTerminal, setShowTerminal] = useState(false); // Controls terminal visibility
  const [terminalText, setTerminalText] = useState(''); // Stores terminal output text
  const [cursorVisible, setCursorVisible] = useState(true); // Controls cursor blink animation

  // Welcome text that appears word by word
  const welcomeWords = ['Welcome', 'to', 'Byte'];
  
  // C++ code with syntax highlighting classes for the terminal simulation
  // Each line has a CSS class for proper syntax highlighting
  const cppCodeLines = [
    { text: '#include <iostream>', class: 'cpp-include' },
    { text: '#include <string>', class: 'cpp-include' },
    { text: '#include <vector>', class: 'cpp-include' },
    { text: '', class: '' },
    { text: 'class TeamIdentity {', class: 'cpp-class' },
    { text: 'private:', class: 'cpp-keyword' },
    { text: '    std::string teamName = "Byte";', class: 'cpp-string' },
    { text: '    std::vector<std::string> coreValues = {', class: 'cpp-keyword' },
    { text: '        "Innovation",', class: 'cpp-string' },
    { text: '        "Excellence",', class: 'cpp-string' },
    { text: '        "Collaboration",', class: 'cpp-string' },
    { text: '        "Creativity"', class: 'cpp-string' },
    { text: '    };', class: 'cpp-operator' },
    { text: '', class: '' },
    { text: 'public:', class: 'cpp-keyword' },
    { text: '    void displayIdentity() {', class: 'cpp-function' },
    { text: '        std::cout << "=== BYTE TEAM IDENTITY ===" << std::endl;', class: 'cpp-output' },
    { text: '        std::cout << "Team Name: " << teamName << std::endl;', class: 'cpp-output' },
    { text: '        std::cout << "Core Values:" << std::endl;', class: 'cpp-output' },
    { text: '', class: '' },
    { text: '        for(const auto& value : coreValues) {', class: 'cpp-keyword' },
    { text: '            std::cout << "  - " << value << std::endl;', class: 'cpp-output' },
    { text: '        }', class: 'cpp-operator' },
    { text: '', class: '' },
    { text: '        std::cout << "\\nMission: Digital Innovation" << std::endl;', class: 'cpp-output' },
    { text: '        std::cout << "Status: Active & Growing" << std::endl;', class: 'cpp-output' },
    { text: '        std::cout << "=========================" << std::endl;', class: 'cpp-output' },
    { text: '    }', class: 'cpp-operator' },
    { text: '};', class: 'cpp-operator' },
    { text: '', class: '' },
    { text: 'int main() {', class: 'cpp-function' },
    { text: '    TeamIdentity byte;', class: 'cpp-class' },
    { text: '    byte.displayIdentity();', class: 'cpp-function' },
    { text: '    return 0;', class: 'cpp-keyword' },
    { text: '}', class: 'cpp-operator' }
  ];

  // Effect for word-by-word welcome text animation
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWordIndex(prev => {
        if (prev < welcomeWords.length - 1) {
          return prev + 1;
        } else {
          clearInterval(wordTimer);
          // Show terminal after welcome text is complete
          setTimeout(() => setShowTerminal(true), 1000);
          return prev;
        }
      });
    }, 800); // 800ms delay between each word

    return () => clearInterval(wordTimer);
  }, []);

  // Effect for terminal typing animation
  useEffect(() => {
    if (showTerminal) {
      let currentLineIndex = 0;
      let currentCharIndex = 0;
      
      const typeTimer = setInterval(() => {
        if (currentLineIndex < cppCodeLines.length) {
          const currentLine = cppCodeLines[currentLineIndex];
          
          if (currentCharIndex < currentLine.text.length) {
            // Add one character at a time to simulate typing
            setTerminalText(prev => {
              const lines = prev.split('\n');
              if (lines.length <= currentLineIndex) {
                lines.push('');
              }
              lines[currentLineIndex] = currentLine.text.substring(0, currentCharIndex + 1);
              return lines.join('\n');
            });
            currentCharIndex++;
          } else {
            // Move to next line
            currentLineIndex++;
            currentCharIndex = 0;
            if (currentLineIndex < cppCodeLines.length) {
              setTerminalText(prev => prev + '\n');
            }
          }
        } else {
          clearInterval(typeTimer);
        }
      }, 50); // 50ms delay between each character

      return () => clearInterval(typeTimer);
    }
  }, [showTerminal]);

  // Effect for cursor blink animation
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500); // 500ms blink interval

    return () => clearInterval(cursorTimer);
  }, []);

  // Function to render syntax highlighted code in the terminal
  const renderHighlightedCode = () => {
    const lines = terminalText.split('\n');
    return lines.map((line, lineIndex) => {
      const codeLine = cppCodeLines[lineIndex];
      if (!codeLine) return <div key={lineIndex}>{line}</div>;
      return (
        <div key={lineIndex} className={codeLine.class}>
          {line}
        </div>
      );
    });
  };

  return (
    <main>
      {/* Navigation component - appears on all pages */}
      <Navigation />

      {/* Hero Section - Main landing area with welcome text and terminal */}
      <section className="hero">
        <div className="hero-container">
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

          {/* Interactive C++ Terminal - Simulates a real terminal with syntax highlighting */}
          <div className="hero-terminal">
            {showTerminal && (
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <span className="terminal-btn terminal-btn-close"></span>
                    <span className="terminal-btn terminal-btn-minimize"></span>
                    <span className="terminal-btn terminal-btn-maximize"></span>
                  </div>
                  <div className="terminal-title">byte-team.cpp</div>
                </div>
                <div className="terminal-body">
                  <div className="terminal-content">
                    <pre className="code-output">
                      <code>
                        {renderHighlightedCode()}
                        {cursorVisible && <span className="cursor">|</span>}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section - Showcases Byte's core offerings */}
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

      {/* Featured Projects Section - Preview of Byte's recent work */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {/* GhostFreakOS - Custom Linux Distribution */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <Link href="/projects" className="btn btn-outline">
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

            {/* AI-Powered Dashboard */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <Link href="/projects" className="btn btn-outline">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">AI & ML</span>
                  <span className="project-year">2025</span>
                </div>
                <h3>AI-Powered Dashboard</h3>
                <p>Intelligent dashboard with machine learning capabilities for data visualization and predictive analytics.</p>
                <div className="project-tags">
                  <span className="tag">Vue.js</span>
                  <span className="tag">Python</span>
                  <span className="tag">TensorFlow</span>
                </div>
                <div className="project-duration">
                  <i className="fas fa-clock"></i>
                  6 months
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="team-preview">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {/* Bad Request - CEO & Founder */}
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <h3>Bad Request</h3>
              <p>CEO & Founder</p>
            </div>

            {/* Example Manager */}
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <h3>Example Manager</h3>
              <p>Manager</p>
            </div>

            {/* Example Developer */}
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <h3>Example Developer</h3>
              <p>Lead Developer</p>
            </div>

            {/* Additional Team Member Placeholder */}
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <h3>Team Member</h3>
              <p>Developer</p>
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

      <Footer />
    </main>
  );
}

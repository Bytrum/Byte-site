'use client';

/**
 * Navigation Component
 * 
 * This component provides the main navigation bar for the Byte website.
 * Features include:
 * - Responsive navigation with mobile menu
 * - Byte logo with glow effect
 * - Active page highlighting
 * - Smooth mobile menu transitions
 * 
 * The component uses React hooks for state management and Next.js for routing.
 */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Byte Logo - Links to homepage */}
        <div className="nav-logo">
          <Link href="/" className="logo-link">
            <Image
              src="/Byte-banner.png"
              alt="Byte Logo"
              width={180}
              height={60}
              className="logo-image"
              priority
              quality={100}
              unoptimized
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/team" className={`nav-link ${pathname === '/team' ? 'active' : ''}`}>
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

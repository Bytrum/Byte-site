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
import { nav, site } from '@/lib/data';

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
              src={site.logoUrl}
              alt={`${site.name} Logo`}
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
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
          {nav.items.map((item) => (
            <li key={item.href} className="nav-item">
              <Link href={item.href} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>
                {item.label}
              </Link>
            </li>
          ))}
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

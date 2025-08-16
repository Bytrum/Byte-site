/**
 * Footer Component
 * 
 * This component provides the footer section for the Byte website.
 * Features include:
 * - Company information and branding
 * - Services links
 * - Company navigation links
 * - Contact information
 * - Social media links
 * - Copyright notice
 * 
 * The component uses Next.js Link for internal navigation.
 */

import { BlurFade } from "@/components/magicui/blur-fade";

import Link from 'next/link';

export default function Footer() {
  return (
    <BlurFade delay={0.06} inView>
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Information Section */}
          <div className="footer-section">
            <h3 className="byte-glow">Byte</h3>
            <p>Digital innovation at its finest. We create solutions that matter.</p>
            {/* Social Media Links */}
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Services Section - Links to Byte's core offerings */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Cybersecurity Services</a></li>
              <li><a href="#">Blogs and Docs</a></li>
              <li><a href="#">Linux Distro and Apps</a></li>
              <li><a href="#">Tools To Help Developers</a></li>
              <li><a href="#">AI Models</a></li>
            </ul>
          </div>

          {/* Company Navigation Section */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>hello@byte.com</p>
            <p>+1 (555) 123-4567</p>
            <p>Egypt</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="footer-bottom">
          <p>&copy; 2025 <span className="byte-glow">Byte</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </BlurFade>
  );
}

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
import { site, social, footer } from '@/lib/data';

export default function Footer() {
  return (
    <BlurFade delay={0.06} inView>
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Information Section */}
          <div className="footer-section">
            <h3 className="byte-glow">{site.name}</h3>
            <p>{footer.blurb}</p>
            {/* Social Media Links */}
            <div className="social-links">
              <a href={social.github}><i className="fab fa-github"></i></a>
            </div>
          </div>

          {/* Services Section - Links to Byte's core offerings */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              {footer.services.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('/') ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Navigation Section */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              {footer.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>{site.contactEmail}</p>
            <p>{site.location}</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="footer-bottom">
          <p>&copy; {site.copyrightYear} <span className="byte-glow">{site.copyrightOwner}</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </BlurFade>
  );
}

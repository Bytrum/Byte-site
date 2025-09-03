/* eslint-disable @next/next/no-page-custom-font */
/**
 * Root Layout Component
 * 
 * This is the root layout for the entire Byte website application.
 * It provides:
 * - Global metadata for SEO
 * - Font configuration (Inter font family)
 * - External resource loading (Font Awesome icons)
 * - HTML structure and body wrapper
 * 
 * This layout wraps all pages in the application.
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
import { site } from "@/lib/data";

// Configure Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Global metadata for SEO and social sharing
export const metadata: Metadata = {
  title: `${site.name} - ${site.tagline}`,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.author }],
};

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load Inter font from Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Load Font Awesome icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}

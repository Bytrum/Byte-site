// We Need To add all the Variables here because if we ned to change any variable we can change it from here

/**
 * Centralized site data module
 * 
 * Purpose:
 * - Provide a single place to update site-wide variables, copy, links, and assets
 * - Export typed objects to prevent mistakes and make refactors safe
 * - Include clear comments so non-devs can update values confidently
 * 
 * Usage:
 * - Import only what you need from this file in pages and components
 * - Example: `import { site, nav, footer } from "@/lib/data"`
 */

// -----------------------------
// Site-level metadata & branding
// -----------------------------
export const site = {
  name: "Byte",
  tagline: "Digital Innovation Team",
  description:
    "Byte is a cutting-edge digital innovation team specializing in cybersecurity services, Linux distributions, developer tools, AI models, and technical documentation.",
  keywords:
    "Byte, digital innovation, cybersecurity, Linux distributions, developer tools, AI models, technical documentation, technology, software development",
  author: "Byte Team",
  // Primary brand/logo image used in nav and social previews
  logoUrl:
    "https://github.com/Bytrum/.github/blob/main/Bytrum_banner.png?raw=true",
  // Primary contact email and location displayed in footer/contact areas
  contactEmail: "hello@byte-team.website",
  // Optional support phone displayed on contact page
  contactPhone: "",
  location: "Egypt",
  // Copyright year and owner displayed in the footer
  copyrightYear: 2026,
  copyrightOwner: "Byte-Team",
} as const;

// -----------------------------
// Navigation configuration
// -----------------------------
// Update labels and hrefs to control nav items in one place
export const nav = {
  items: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

// -----------------------------
// Social links
// -----------------------------
// Add new platforms as needed (e.g., Twitter, LinkedIn)
export const social = {
  github: "https://github.com/Bytrum",
} as const;

// -----------------------------
// Footer content
// -----------------------------
export const footer = {
  // Short, human-friendly description under the brand name
  blurb: "Digital innovation at its finest. We create solutions that matter.",
  // Services list shown in the footer; use `href` for internal or external links
  services: [
    { label: "Cybersecurity Services", href: "#" },
    { label: "Blogs and Docs", href: "/Blogs" },
    { label: "Linux Distro and Apps", href: "#" },
    { label: "Tools To Help Developers", href: "#" },
    { label: "AI Models", href: "#" },
  ],
  // Company navigation (internal pages)
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

// -----------------------------
// Homepage content
// -----------------------------
export const home = {
  hero: {
    // Word-by-word welcome animation; edit the words to change the hero title
    welcomeWords: ["Welcome", "to", "byte"],
    subtitle:
      "We are a team of digital innovators, creators, and problem solvers",
    primaryCta: { label: "View Our Work", href: "/projects" },
    secondaryCta: { label: "Meet the Team", href: "/team" },
  },
  services: [
    {
      iconClass: "fab fa-linux",
      title: "Building Custom Linux Distributions and Applications",
      description: "",
    },
    {
      iconClass: "fas fa-tools",
      title:
        "Maintaining and Developing OpenSource Projects and Developer Tools",
      description: "", // Optional short description
    },
    {
      iconClass: "fas fa-brain",
      title: "Building Custom AI Models and Machine Learning Solutions",
      description: "",
    },
  ],
  featuredProjects: [
    {
      name: "GhostFreakOS",
      category: "LINUX DISTRO",
      year: 2025,
      imageUrl: "https://i.ibb.co/8g1bXrvy/GSH.png",
      summary:
        "Custom Linux distribution optimized for new users who want to try arch linux with no bloat and security professionals with pre-installed development tools.",
      tags: ["Arch Linux", "Custom", "Security"],
      durationText: "1 month",
      detailsHref: "/projects",
    },
    {
      name: "ZenShell",
      category: "DEV TOOL",
      year: 2025,
      imageUrl: "", // Add image URL when available
      summary:
        "A Linux Shell Built in C++ and configured by Lua for enhanced development workflow and automation.",
      tags: ["C++", "Shell", "Lua"],
      durationText: "1 month",
      detailsHref: "/projects",
    },
  ],
  teamPreview: [
    {
      name: "Ahmed Shafik",
      role: "Software Engineer and Manager",
      avatarUrl: "https://github.com/Lazysniperz.png",
    },
    {
      name: "Omar Sameh",
      role: "Ceo & Founder ",
      avatarUrl: "https://github.com/om7iux.png",
    },
    {
      name: "Asaadzx",
      role: "Software Engineer and Manager",
      avatarUrl: "https://github.com/asaadzx.png",
    },
    {
      name: "Abd Elaziz",
      role: "Cyber Security Agent",
      avatarUrl: "https://github.com/haunter4e.png",
    },
    {
      name: "Basmala Mahmoud",
      role: "Social Media Manager",
      avatarUrl: "https://github.com/basmalamahmoud32010-ai.png",
    },
  ],
} as const;

// -----------------------------
// About page content
// -----------------------------
export const about = {
  header: {
    titleHtml: 'About <span class="byte-glow">Byte</span>',
    subtitle:
      "We are a passionate team of digital innovators dedicated to creating exceptional experiences through technology and creativity.",
  },
  mission: {
    title: "Our Mission",
    paragraphs: [
      "At Byte, we believe that technology should enhance human experiences, not complicate them. Our mission is to create digital solutions that are not only functional and beautiful but also intuitive and meaningful.",
      "We work closely with our clients to understand their unique challenges and goals, then craft tailored solutions that drive real business value and user satisfaction.",
    ],
    cta: { label: "Get In Touch", href: "/contact" },
    iconClass: "fas fa-rocket",
  },
  values: [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description:
        "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and foster a culture of open communication and mutual respect.",
    },
    {
      icon: "fas fa-star",
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code quality to user experience.",
    },
    {
      icon: "fas fa-heart",
      title: "Passion",
      description:
        "Our team is passionate about technology and committed to creating meaningful digital experiences.",
    },
  ],
  timeline: [
    {
      year: "2025",
      title: "The Birth of Byte",
      description:
        "Byte was founded with a vision to revolutionize digital experiences through innovation and cutting-edge technology.",
    },
  ],
  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "Vue.js",
    "Flutter",
    "React Native",
    "AWS",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "TensorFlow",
    "Figma",
  ],
} as const;

// -----------------------------
// Team page content
// -----------------------------
export const team = {
  header: {
    titleHtml: 'Meet the <span class="byte-glow">Byte</span> Team',
    subtitle: 'Our talented team of innovators, creators, and problem solvers',
  },
  stats: [
    { number: '3', label: 'Projects Completed' },
    { number: '4', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ],
  groups: {
    Owner: [
      {
        name: 'Omar Sameh',
        role: 'CEO & Founder & Cybersecurity Expert',
        bio: "Hi, Im Omar — Passionate about Red Teaming and Penetration testing, I explore and challenge limits .",
        avatar: 'https://github.com/om7iux.png',
        social: {
          github: 'https://github.com/om7iux',
          linkedin: 'https://www.linkedin.com/in/om7iux/',
          discord: 'https://discord.com/users/1128989531346059364',
          instagram: '',
          portfolio: '',
        },
      },
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
          portfolio: '',
        },
      },
    ],
    Developers: [
      {
        name: 'Asaad Zein',
        role: 'Supervisor & Ai Developer',
        bio: 'A 15 Years Old Boy Who Loves Coding And Electric Engineering And Data Science.',
        avatar: 'https://github.com/asaadzx.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/asaad-zx/',
          github: 'https://github.com/asaadzx ',
          discord: 'https://discord.com/users/913099850982248528',
          instagram: 'https://www.instagram.com/asaad.zein.1/',
          portfolio: 'https://asaadzx.is-a.dev/',
        },
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
          portfolio: '',
        },
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
          portfolio: 'https://ghosty.is-a.dev',
        },
      },
    ],
  },
} as const;

// -----------------------------
// Contact page content
// -----------------------------
export const contact = {
  header: {
    titleHtml: 'Get In Touch with <span class="byte-glow">Byte</span>',
    subtitle:
      "Ready to start your next project? Let’s discuss how we can help bring your vision to life.",
  },
  info: [
    {
      iconClass: 'fas fa-envelope',
      title: 'Email Us',
      valueFrom: 'site.contactEmail', // Display site email
      note: "We'll respond within 24 hours",
    },
    {
      iconClass: 'fas fa-phone',
      title: 'Call Us',
      valueFrom: 'site.contactPhone', // Optional phone
      note: 'Mon-Fri 9AM-6PM EST',
    },
    {
      iconClass: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      valueFrom: 'site.location',
      note: 'Schedule a meeting',
    },
  ],
  faqItems: [
    {
      question: 'What services does Byte offer?',
      answer:
        "We offer comprehensive digital solutions including cybersecurity services, technical documentation and blogs, custom Linux distributions and applications, developer tools and utilities, and custom AI models. Our team specializes in creating secure, innovative solutions using cutting-edge technologies.",
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer:
        "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We tailor our approach to meet your specific needs and budget requirements.",
    },
    {
      question: 'What technologies do you use?',
      answer:
        "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, Flutter, and more. We choose the best technology stack for each project based on requirements and goals.",
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes updates, security patches, and technical support.',
    },
    {
      question: 'How do you handle project communication?',
      answer:
        "We maintain transparent communication throughout the project lifecycle. You'll have a dedicated project manager and regular check-ins to keep you updated on progress and address any questions.",
    },
  ],
} as const;

// -----------------------------
// Projects page content
// -----------------------------
export const projects = {
  header: {
    titleHtml: '<span class="byte-glow">Byte</span> Projects',
    subtitle: 'Discover our innovative solutions and cutting-edge applications',
  },
  categories: [
    { id: 'all', label: 'All Projects' },
    { id: 'pentest', label: 'Pentesting' },
    { id: 'linux', label: 'Linux Distros' },
    { id: 'dev', label: 'Linux and dev tools' },
    { id: 'ai', label: 'AI & ML' },
  ],
  items: [
    {
      id: 1,
      title: 'GhostFreakOS',
      description:
        'Custom Linux distribution optimized for new users who want to try arch linux with no bloat and security professionals with pre-installed development tools.',
      category: 'linux',
      tags: ['Arch Linux', 'Custom', 'Security'],
      year: '2025',
      duration: '1 month',
      link: 'https://ghostfreak.is-local.org',
      image: 'https://i.ibb.co/8g1bXrvy/GSH.png',
    },
    {
      id: 2,
      title: 'ZenShell',
      description: 'A Linux Shell Built in C++ and configured by Lua',
      category: 'dev',
      tags: ['C++', 'Shell', 'Lua'],
      year: '2025',
      duration: '1 month',
      link: 'https://github.com/asaadzx/zenshell',
      image: '#',
    },
  ],
} as const;

// -----------------------------
// Blogs page content
// -----------------------------
export const blogs = {
  header: {
    title: 'Blogs',
    subtitle:
      "Welcome to my blog collection Here you'll find posts made by me, Asaad Zein, exploring technology, engineering, and more.",
  },
  featured: {
    title:
      '⚡ How 15-Year-Olds Are Powering Their Future with Electronics & Microcontrollers',
    href: '/Blogs/ElectricEngineeringYounge',
    intro:
      'In the past, learning electrical engineering or programming microcontrollers was something reserved for university labs or seasoned engineers. Today, teenagers — some as young as 15 — are wiring circuits, coding microchips, and building real-world gadgets from their bedrooms.',
    author: 'Asaad Zein',
  },
  comingSoonTitle: 'More Blogs Coming Soon',
  comingSoonSubtitle:
    'Stay tuned for more posts about electronics, programming, and creative projects!',
} as const;

// -----------------------------
// Utility types (optional to import elsewhere)
// -----------------------------
export type NavItem = (typeof nav.items)[number];
export type ServiceItem = (typeof home.services)[number];
export type ProjectItem = (typeof home.featuredProjects)[number];
export type TeamMember = (typeof home.teamPreview)[number];
export type FooterLink = (typeof footer.company)[number] | (typeof footer.services)[number];
export type TeamGroups = typeof team.groups;


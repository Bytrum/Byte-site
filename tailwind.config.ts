import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'secondary-black': '#111111',
        'dark-gray': '#1a1a1a',
        'medium-gray': '#333333',
        'light-gray': '#666666',
        'silver': '#c0c0c0',
        'light-silver': '#e0e0e0',
        'white': '#ffffff',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease forwards',
        'fadeInScale': 'fadeInScale 0.6s ease forwards',
      },
      keyframes: {
        glow: {
          'from': { textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' },
          'to': { textShadow: '0 0 40px rgba(255, 255, 255, 0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInScale: {
          'from': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.3)',
        'glow-strong': '0 0 30px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;

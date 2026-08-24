import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FAF7F2',
          'bg-alt': '#F3ECE2',
          'bg-card': '#FFFFFF',
          charcoal: '#10141E',
          midnight: '#18243A',
          dark: '#10131A',
          copper: '#A85D45',
          'copper-bright': '#C98D78',
          'copper-light': '#F5EBE6',
          'copper-dark': '#84422F',
          peach: '#C98D78',
          ivory: '#FAF7F2',
          muted: '#5A6474',
          'muted-light': '#7E8A9C',
          border: 'rgba(168, 93, 69, 0.22)',
          'border-light': 'rgba(16, 20, 30, 0.08)',
          glass: 'rgba(255, 255, 255, 0.88)',
        },
      },
      fontFamily: {
        parabolica: ['"parabolica"', 'sans-serif'],
        serif: ['"parabolica"', 'sans-serif'],
        display: ['"parabolica"', 'sans-serif'],
        sans: ['"parabolica"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        '1600px': '1600px',
        '1500px': '1500px',
        '1440px': '1440px',
        '1280px': '1280px',
      },
      letterSpacing: {
        'luxury': '0.25em',
        'ultra': '0.35em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'copper-shimmer': 'linear-gradient(135deg, #C98D78 0%, #FAF7F2 50%, #A85D45 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

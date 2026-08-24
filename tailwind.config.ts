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
          charcoal: '#10131A',
          midnight: '#18243A',
          teal: '#10323C',
          dark: '#0B0D12',
          copper: '#C98D78',
          'copper-light': '#E8C5B8',
          'copper-dark': '#A86D58',
          peach: '#E8C5B8',
          ivory: '#F5F0EA',
          muted: '#B9B1AA',
          border: 'rgba(201, 141, 120, 0.22)',
          'border-light': 'rgba(255, 255, 255, 0.1)',
          glass: 'rgba(16, 19, 26, 0.82)',
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
        'copper-shimmer': 'linear-gradient(135deg, #C98D78 0%, #F5F0EA 50%, #C98D78 100%)',
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

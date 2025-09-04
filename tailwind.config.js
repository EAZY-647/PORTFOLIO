/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx,json}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(240 14% 7%)',
        fg: 'hsl(240 8% 96%)',
        muted: 'hsl(240 6% 68%)',
        card: 'hsl(240 14% 9% / 0.7)',
        stroke: 'hsl(240 10% 30% / 0.3)',
        primary: { DEFAULT: 'hsl(260 100% 66%)', 2: 'hsl(192 100% 50%)' },
        secondary: { DEFAULT: 'hsl(192 94% 44%)' }
      },
      borderRadius: { xl2: '1.25rem' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,.25)' },
      fontFamily: {
        display: ['var(--font-display)','system-ui','sans-serif'],
        body: ['var(--font-body)','system-ui','sans-serif']
      },
      keyframes: {
        float: { '0%': { transform: 'translateY(0px)' }, '100%': { transform: 'translateY(-10px) rotate(6deg)' } }
      },
      animation: { float: 'float 8s ease-in-out infinite alternate' }
    }
  },
  plugins: []
};

export const tokens = {
  brand: {
    name: 'Ayush Kumar Sahu',
    role: 'Data Engineer',
    tagline: 'I build fast, reliable data pipelines and real-time analytics.',
    location: 'London, UK',
    email: 'ayushkusahuk@gmail.com',
    github: 'EAZY647',
    linkedin: 'https://linkedin.com/in/',
  },
  colors: {
    bg: 'hsl(240 14% 7%)', fg: 'hsl(240 8% 96%)', muted: 'hsl(240 6% 68%)',
    gradient: 'linear-gradient(135deg, hsl(260 100% 66%), hsl(192 100% 50%))',
  },
  motion: {
    durations: { fast: 200, base: 320, slow: 450 },
    easing: { standard: [0.2, 0.8, 0.2, 1], entrance: [0.16, 1, 0.3, 1], exit: [0.4, 0, 1, 1] },
    spring: { type: 'spring', stiffness: 160, damping: 20, mass: 1 },
  }
} as const;

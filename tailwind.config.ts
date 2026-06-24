import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        mutedForeground: 'rgb(var(--color-muted-foreground) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accentSecondary: 'rgb(var(--color-accent-secondary) / <alpha-value>)',
        accentTertiary: 'rgb(var(--color-accent-tertiary) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        input: 'rgb(var(--color-input) / <alpha-value>)',
        destructive: 'rgb(var(--color-destructive) / <alpha-value>)'
      },
      fontFamily: {
        display: ['Orbitron', 'Share Tech Mono', 'monospace'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        accent: ['Share Tech Mono', 'JetBrains Mono', 'monospace']
      },
      boxShadow: {
        neon: 'var(--shadow-neon)',
        'neon-sm': 'var(--shadow-neon-sm)',
        'neon-lg': 'var(--shadow-neon-lg)',
        magenta: 'var(--shadow-neon-secondary)',
        cyan: 'var(--shadow-neon-tertiary)'
      },
      backgroundImage: {
        'cyber-grid':
          'linear-gradient(rgba(0, 255, 136, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.04) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;

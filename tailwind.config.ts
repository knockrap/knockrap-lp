import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        ink: 'var(--ink)',
        ink2: 'var(--ink2)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        bg: 'var(--bg)',
        white: 'var(--white)',
        blue: 'var(--blue)',
        blue2: 'var(--blue2)',
        'blue-bg': 'var(--blue-bg)',
        orange: 'var(--orange)',
        'orange-bg': 'var(--orange-bg)',
        green: 'var(--green)',
        'green-bg': 'var(--green-bg)',
      },
      boxShadow: {
        soft: 'var(--shadow)',
      },
    },
  },
  plugins: [],
} satisfies Config

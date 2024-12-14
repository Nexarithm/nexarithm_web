import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        sm: {
          css: {
            fontSize: '0.925rem',
            h1: {
              fontSize: '1.875rem',
            },
            h2: {
              fontSize: '1.5rem',
            },
            h3: {
              fontSize: '1.25rem',
            },
            p: {
              marginTop: '1em',
              marginBottom: '1em',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography(),
  ],
}

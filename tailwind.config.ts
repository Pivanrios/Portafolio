import type {Config} from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors:{
                background: 'rgb(var(--background) / <alpha-value>)',//-- > it captures both types of value
                surface: 'rgb(var(--surface) / <alpha-value>)',
                text: 'rgb(var(--text) / <alpha-value>)',
                primary: 'rgb(var(--primary) / <alpha-value>)',
                secondary: 'rgb(var(--secondary) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
                border: 'rgb(var(--border) / <alpha-value>)',                
            },
            fontFamily: {
                sans: 'var(--font-sans)',
                mono: 'var(--font-mono)',
              },
        }
    },
    plugins:[],
}
import type { Config } from 'tailwindcss';
import theme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['dark'],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '320px',
        md: '640px',
        lg: '768px',
        '2lg': '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        // BEAUFORT FONTS
        'beaufort-light': ['Beaufort-Light', ...theme.fontFamily.sans],
        'beaufort-lightitalic': ['Beaufort-LightItalic', ...theme.fontFamily.sans],
        'beaufort-regular': ['Beaufort-Regular', ...theme.fontFamily.sans],
        'beaufort-italic': ['Beaufort-Italic', ...theme.fontFamily.sans],
        'beaufort-medium': ['Beaufort-Medium', ...theme.fontFamily.sans],
        'beaufort-mediumitalic': ['Beaufort-MediumItalic', ...theme.fontFamily.sans],
        'beaufort-bold': ['Beaufort-Bold', ...theme.fontFamily.sans],
        'beaufort-bolditalic': ['Beaufort-BoldItalic', ...theme.fontFamily.sans],
        'beaufort-heavy': ['Beaufort-Heavy', ...theme.fontFamily.sans],
        'beaufort-heavyitalic': ['Beaufort-HeavyItalic', ...theme.fontFamily.sans],

        // SPIEGEL FONTS
        'spiegel-regular': ['Spiegel-Regular', ...theme.fontFamily.sans],
        'spiegel-regularitalic': ['Spiegel-RegularItalic', ...theme.fontFamily.sans],
        'spiegel-semiBold': ['Spiegel-SemiBold', ...theme.fontFamily.sans],
        'spiegel-semiBolditalic': ['Spiegel-SemiBoldItalic', ...theme.fontFamily.sans],
        'spiegel-bold': ['Spiegel-Bold', ...theme.fontFamily.sans],
        'spiegel-bolditalic': ['Spiegel-BoldItalic', ...theme.fontFamily.sans]
      }
    }
  }
};

export default config;

import type { Config } from 'tailwindcss';
import theme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    screens: {
      sm: '320px',
      md: '640px',
      lg: '768px',
      '2lg': '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
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
  },

  plugins: []
} as Config;

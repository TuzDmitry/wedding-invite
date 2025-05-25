import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/forms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-amber-600',
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    // screens: {
    //   sm: '768px',
    //   lg: '992px',
    //   xl: '1200px',
    // },
    extend: {
      boxShadow: {
        base: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        1: '0px 2px 4px 0px rgba(0, 0, 0, 0.12)',
        2: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        3: '0px 0px 2px 0px rgba(142, 61, 140, 0.16)',
        4: '0px 0px 2px 0px #A6A6A6 inset',
        'transparent': '0px 2px 2px 0px transparent inset, 0px -2px 0px 0px transparent inset',
        5: '0px 1px 4px 1px rgba(0, 0, 0, 0.08)',
        6: '0px 3px 5px -1px rgba(1, 1, 1, 0.20), 0px 6px 10px 0px rgba(1, 1, 1, 0.14), 0px 1px 18px 0px rgba(1, 1, 1, 0.12)',
        7: '0px 5px 5px 0px rgba(0, 0, 0, 0.20), 0px 8px 10px 0px rgba(0, 0, 0, 0.14), 0px 3px 14px 0px rgba(0, 0, 0, 0.12)',
        8: '0px 6px 16px 4px rgba(0, 0, 0, 0.15), 0px 0px 4px 0px rgba(0, 0, 0, 0.12)',
        'product-card-norm': '0px 0px 2px 0px rgba(166, 166, 166, 1) inset',
        'product-card-extra': '0px 0px 8px 0px rgba(200, 108, 201, 1) inset',
        'radio': '0 0 0 2px #1e293b',
        'radio-dark': '0 0 0 2px #f1f5f9',
        10: '0px 0px 8px 0px #C86CC9 inset',
        'popup-message': '0 4px 20px rgba(0,0,0,0.2)',
      },
      colors: {
        'dark-text': '#1A253E',
        'light-primary': '#000000',
        'grad-btn': {
          stop: {
            1: '#27005D',
            2: '#A6A9DF',
            3: '#903E8E',
          },
        },
        'base': {
          'textarea-dark': '#3B3B3D',
          'dark-background': '#272727',
          'dark-popover-background': '#52525B',
          violet: {
            50: '#C69EC5',
          },
        },
      },
      fontSize: {
        //in extend you can rewrite exact default setting or create new if such prop not exist
        xxxs: ['6px', '8px'],
        xxs: ['10px', '12px'],
        xs: ['12px', '14px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        xxl: [
          '32px',
          {
            letterSpacing: '0.15px',
            fontWeight: '800',
          },
        ],
        gigantic: [
          '400px',
          {
            fontWeight: '400',
          },
        ],
      },
      fontFamily: {
        // TODO: Add Sofia font in here for using in tailwind
        code: ['"Cutive Mono"'],
        // platform: ['Sofia', 'sans-serif'],
        nunito: ['"Nunito"', 'sans-serif'],
        arial: ['"Arial"', 'sans-serif'],
        allegro: ['Allegro', 'cursive'],

      },
    },
  },
};

export default config;

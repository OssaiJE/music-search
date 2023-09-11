/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.js'],
  theme: {
    screens: {
      xs: '200px',
      sm: '480px',
      ms: '600px',
      md: '768px',
      lg: '976px',
      sl: '1280px',
      xl: '1440px',
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Nexa: ['Nexa', 'sans-serif'],
      DMSans: ['DM Sans', 'sans-serif'],
    },
    colors: {
      oldGreen: '#005555',
      green: '#229698',
      orange: '#F8B400',
      black: '#000000',
      offWhite: '#F5F5F5',
      darkBlack: '#212121',
      successGreen: '#049E26',
      errorRed: '#F51010',
      notificationBackgroundGreen: '#BDF4C9',
      white: '#FFFFFF',
      offBrown: '#BEB9B9',
      offDark: '#EAF0FA',
    },
    extend: {
      spacing: {
        4.5: '18px',
        6.5: '27px',
        22: '83px',
        29: '118px',
        200: '570px',
      },
      borderRadius: {
        lgr: '9px',
        txr: '5px',
      },
      boxShadow: {
        smYellow: '0px 2.25466px 7.8913px rgba(248, 180, 0, 0.25)',
        lgYellow: '0px 1.64177px 44.3383px rgba(248, 180, 0, 0.12)',
      },
      lineHeight: {
        11: '2.625rem',
        4.5: '1.125rem',
      },
    },
  },
  plugins: [
    // require('tw-elements/dist/plugin'),
    // // eslint-disable-next-line @typescript-eslint/no-var-requires
    // require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};

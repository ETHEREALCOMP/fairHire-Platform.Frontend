const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#fff',
      },
      fontFamily: {
        arimo: ['var(--font-arimo)', 'sans-serif'],
      },
      fontSize: {
        base: ['14px', '1.43'],
      },
    },
  },
  plugins: [],
};

export default config;

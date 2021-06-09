module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        primary: {
          50: '#E5F5FF',
          100: '#B7E3FF',
          200: '#8AD1FF',
          300: '#5CBEFF',
          400: '#2EACFF',
          500: '#0095F6',
          600: '#007CCD',
          700: '#0064A4',
          800: '#004B7C',
          900: '#003253',
        },
        fwhite: '#FAFAFA',
        brands: {
          facebook: '#4267b2',
          twitter: '#1da1f2',
          apple: '#000'
        },
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active'],
    },
  },
  plugins: [],
}

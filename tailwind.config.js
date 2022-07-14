/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'public/**/*.html',
    ]
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
};

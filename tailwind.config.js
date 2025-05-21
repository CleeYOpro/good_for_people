module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a3c34', // Forest green for Sammamish's natural theme
        'secondary': '#4a8072', // Lighter green
        'accent': '#f0c869', // Gold accent
        'light': '#f7f7f7', // Light background
        'dark': '#333333', // Dark text
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      height: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
    },
  },
  plugins: [],
}
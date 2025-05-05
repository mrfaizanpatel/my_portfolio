module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { keyframes: {
      slideDown: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },  // Start much higher
        '50%': { transform: 'translateY(40%)', opacity: '0.7' }, // Move down a bit and be semi-visible
        '100%': { transform: 'translateY(0)', opacity: '1' },     // End at normal position with full opacity
      },
    },
    animation: {
      slideDown: 'slideDown 2.5s ease-out forwards',
    },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


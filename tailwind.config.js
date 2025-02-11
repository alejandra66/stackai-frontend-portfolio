module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        stackBlue: '#2663EB',
        aiBlue: '#1F54C7',
      },
      spacing: {
        '121.57': '121.57px',
        '28': '28px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

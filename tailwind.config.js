/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        containerColor: '#242538'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #373E6A, #51395D)',
        'fireGradient': 'linear-gradient(to right, #6A3749, #5D3939)',
        'earthGradient': 'linear-gradient(to right, #376A3F, #184A2F)',
        'airGradient': 'linear-gradient(to right, #37646A, #0B3B3B)',
        'waterGradient': 'linear-gradient(to right, #37556A, #40395D)',
      },
    },
  },
  plugins: [],
}
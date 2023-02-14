/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"src/app/**/*.{js,ts,jsx,tsx}",
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			fontFamily: {
				montserrat: ['var(--font-montserrat)'],
			},
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit,minmax(15rem,1fr))',
			}
		},
  },
  plugins: [],
}

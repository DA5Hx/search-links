/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			height: (theme) => ({
				'screen-1/2': 'calc(100vh/2)',
			}),
			fontFamily: {
				sans: ['Patua One', 'cursive'],
				signika:['Signika', 'sans-serif'],
				inter:['Inter','sans-serif'],
				palaq:['Palaqnuin Dark','sans']
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
      themes: [
        {
          dark: {  
			"primary": "#7f1d1d",      
			"secondary": "#ef4444",      
			"accent": "#f3f4f6",     
			"neutral": "#6b7280",     
			"base-100": "#1c1917",      
			"info": "#3abff8",      
			"success": "#36d399",      
			"warning": "#fbbd23",      
			"error": "#f87272",
          },
		  light: {
			"primary": "#7f1d1d",
			"secondary": "#ef4444",
			"accent": "#1c1917",
			"neutral": "#6b7280",
			"base-100": "#f3f4f6",
			"info": "#3abff8",
			"success": "#36d399",
			"warning": "#fbbd23",
			"error": "#f87272",
          },
        },
      ],
    },
	darkTheme: 'dark',
};

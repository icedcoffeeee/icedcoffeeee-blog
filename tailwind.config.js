const defaults = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['EB Garamond', ...defaults.fontFamily.serif],
				mono: ['JetBrains Mono', ...defaults.fontFamily.mono]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

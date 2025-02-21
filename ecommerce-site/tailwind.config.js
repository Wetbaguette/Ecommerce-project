/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				autoScroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-51%)" },
				},
				reverseScroll: {
					"0%": { transform: "translateX(-51%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
			animation: {
				autoScroll: "autoScroll 10s linear infinite",
				reverseScroll: "reverseScroll 10s linear infinite",
			},
		},
	},
	plugins: [],
};

import { transform } from "typescript";

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
				specialScroll: {
					"0%": { transform: "translateX(0)" },
					"1%, 8%": { transform: "translateX(-4%)" },
					"9%, 17%": { transform: "translateX(-8%)" },
					"18%, 26%": { transform: "translateX(-13%)" },
					"32%, 40%": { transform: "translateX(-17%)" },
					"41%, 49%": { transform: "translateX(-21%)" },
					"50%, 58%": { transform: "translateX(-25%)" },
					"59%, 67%": { transform: "translateX(-29%)" },
					"68%, 76%": { transform: "translateX(-33%)" },
					"77%, 85%": { transform: "translateX(-38%)" },
					"86%, 92%": { transform: "translateX(-42%)" },
					"93%, 100%": { transform: "translateX(-46%)" },
				},
			},
			animation: {
				autoScroll: "autoScroll 10s linear infinite",
				reverseScroll: "reverseScroll 10s linear infinite",
				specialScroll: "specialScroll 30s linear infinite",
			},
		},
	},
	plugins: [],
};

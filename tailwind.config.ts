export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        table: {
          red: "#C80036",
          yellow: "#FDE767",
          blue: "#3FA2F6",
          green: "#81A263",
        },
        text: { gray: { 100: "#9F9898", 200: "#7D7B8A" } },
      },
      fontSize: {
        xs: "12px",
        sm: "13px",
        base: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "22px",
        "3xl": "26px",
        "4xl": "30px",
        "5xl": "36px",
        "6xl": "42px",
      },
    },
  },
}

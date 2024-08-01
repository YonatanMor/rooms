export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  plugins: [
  ],
  theme: {
    extend: {
      colors: {
        flag: {
          purple: "#C738BD",
          orange: "#F4A261",
          blue: "#3FA2F6",
          green: "#36BA98",
        },
        menu: { 300: "#BBE9FF", 400: "#708C99", 500: "#12ACF6" },
        btn: { delete: "#F5004F", save: "#399918"},
        text: {
          grey: {
            100: "#9F9898",
            200: "#7D7B8A",
            300: "#4E4E4E",
            400: "#808080",
            500: "#373A40",
            600: "#151515",
          },
        },
        table: { 100: "#B0A695", 200: "#EBE3D5" },
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
        "7xl": "44px",
      },
      height: {
        10: "44px",
      },
      margin: { 9: "41px", 10: "44px" },
    },
  },
}

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      colors: {
        nav: { tab: "#DDDDDD" },
        event: {
          text: {
            purple: "#C738BD",
            red: "#C80036",
            blue: "#3FA2F6",
            green: "#36BA98",
          },
          bg: { red: "#FCAEAE", blue: "#BBE9FF", green: "#DEF9C4" },
        },
        menu: { 300: "#BBE9FF", 400: "#708C99", 500: "#12ACF6" },
        btn: { delete: "#F5004F", save: "#399918" },
        text: {
          grey: {
            100: "#9F9898",
            200: "#7D7B8A",
            300: "#4E4E4E",
            400: "#808080",
            500: "#373A40",
            600: "#151515",
            700: "#EEEDEB",
          },
        },
        table: { 100: "#B0A695", 200: "#EBE3D5" },
      },
      fontFamily: {
        powered: ["Orbitron"],
        logo: ["NotoSerifKhitanSmallScript"],
        joke: ["Playwrite"],
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

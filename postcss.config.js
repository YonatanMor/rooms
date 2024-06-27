module.exports = (ctx) => ({
  plugins: {
    "tailwindcss/nesting": {},
    cssnano: ctx.env === "production" ? {} : false,
    autoprefixer: {},
    tailwindcss: {},
  },
})

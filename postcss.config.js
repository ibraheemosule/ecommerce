const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./pages/**/*.{js,vue,html}", "./components/**/*.{js,vue,html}"],
  // content: [".src/**/*.html", ".src/**/*.vue"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};

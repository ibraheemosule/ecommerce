const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/pages/**/*.{js,vue,html}",
    "./src/components/**/*.{js,vue,html}",
    "./src/views/**/*.{js,vue,html}",
    "./src/store/**/*.{js,vue,html}",
    "./src/router/**/*.{js,vue,html}",
    "./src/assets/Images/**/*.{js,vue,html}",
  ],
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

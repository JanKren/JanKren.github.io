module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Selectors that only ever appear at runtime: single-page-nav.js adds the two
  // animation classes, and vanilla-back-to-top.min.js injects the button itself.
  // PurgeCSS does find them in the scanned JS today, but that is incidental — an
  // inlined or minified build would drop the styling silently, so they are pinned here.
  safelist: {
    standard: ["animate-in", "will-animate", "back-to-top"],
  },
};

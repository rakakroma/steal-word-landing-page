// https://github.com/tailwindlabs/tailwindcss/issues/7618
//this is for supporting old browser, turn color from rgb to rgba
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      browsers: "chrome >= 50", // configure a compatible browser version
    },
  },
};

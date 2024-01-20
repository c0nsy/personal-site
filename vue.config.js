// vue.config.js
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  base: "/personal-site/",
  plugins: [vue()],
  // publicPath: "./",
  // outputDir: "dist", // or your desired output directory
});

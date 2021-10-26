const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix
  .js("src/js/app.js", "assets")
  .postCss("src/scss/main.css", "assets/style.css", {}, [
    tailwindcss("./tailwind.config.js"),
  ])
  .disableNotifications();
import lume from "lume/mod.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  location: new URL("https://enriquemp.ml"),
  src: "./src",
});

site.use(sitemap());
site.copy("styles", "styles");

export default site;

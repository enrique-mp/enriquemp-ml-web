import lume from "lume/mod.ts";

const site = lume({
  location: new URL("https://enriquemp.ml"),
  src: "./src",
});

export default site;

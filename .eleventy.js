module.exports = function (eleventyConfig) {
  
    eleventyConfig.addPassthroughCopy("./src/css", "./src/js");
    eleventyConfig.addPassthroughCopy({"./src/img": "/img"});

    eleventyConfig.addWatchTarget("./src/css", "./src/js");

  
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
    });
    
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css');

    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');
    
    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./_src/images/');

    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',

      dir: {
        input: '_src',
        output: '_site'
      }
    };
  };
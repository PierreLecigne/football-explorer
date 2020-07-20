module.exports = function(grunt) {

  grunt.initConfig({
    apidoc: {
      app: {
        src: "src/",
        dest: "apidoc/",
        options: {
          debug: true,
          includeFilters: [ ".*\\.ts$" ],
          excludeFilters: [ "node_modules/" ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-apidoc');

  // Default task(s).
  grunt.registerTask('default', ['apidoc']);
}

module.exports = function(grunt) {

  grunt.initConfig({});

  grunt.loadTasks('./tasks/');
  
  grunt.loadNpmTasks('grunt-env');

  // Default task.
  grunt.registerTask('default', 'Say hello.', function() {
    grunt.log.write('Hello...').ok();
  });

}

module.exports = function(grunt) {
  grunt.initConfig({
    // Dependencies
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        compress:true,
        mangle:true,
        sourceMap: false,
      },
      map:{
        files:{
          'build/chartjs-plugin-labels.min.js': 'src/chartjs-plugin-labels.js',
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Specify tasks and subtasks
  grunt.registerTask('default', 'uglify');

}

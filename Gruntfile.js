module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'mixpanel.js',
        dest: 'mixpanel.min.js'
      }
    },
    watch: {
      css: {
        files: '**/*.js',
        tasks: ['uglify'],
        options: {
          livereload: true,
        },
      },
    },
    clean: {
      build: ["mixpanel.min.js", "mixpanel-theme.zip"], 
      deploy: ["README.html"]
    },
    compress: {
      main: {
        options: {
          archive: 'mixpanel-theme.zip'
        },
        files: [
          {src: ['mixpanel.js', 'mixpanel.min.js', 'LICENSE', 'README.md', 'README.html'], dest: 'mixpanel-theme/', filter: 'isFile'}
        ]
      }
    }, 
    markdown: {
      all: {
        files: [
          {
            expand: true,
            src: 'README.md',
            ext: '.html'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerTask('default', ['clean', 'uglify']);
  grunt.registerTask('deploy', ['clean:build', 'uglify', 'markdown', 'compress', 'clean:deploy']);
};
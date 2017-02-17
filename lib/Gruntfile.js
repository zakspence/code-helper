module.exports = function(grunt) {
  grunt.initConfig({

    jshint: {
      files: ['../js/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$", "this", "window", "event"], //allows for predefined things not found in js
        esversion: 6, //allows for ES6
        globalstrict: true,
        globals: {"Dean":true}, //name value pairs, allows to define global vars used in many files.
        browserify: true,
        forin: true,    //throws an error if you don't iterate over
                        //own properties
        jquery: true,     //makes the jquery not throw the errors
        strict: "global", //requires '"use strict";'' at global level
        undef: true,      //throws error for variables that are left
                        //undefined
                        //at instantiation; this catches lots of typo errors
      }
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/style.css': '../sass/style.scss'
        }
      }
    },
    browserify: {
      '../dist/myApp.js': ['../js/app.js']
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify: ['../js/*.js'],
      tasks: ["browserify"]
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};

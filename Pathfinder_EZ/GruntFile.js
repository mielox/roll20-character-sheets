module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      default: {
        files: {
          'sheet.css': 'less/index.less'
        }
      }
    },
    pug: {
      default: {
        files: {
          'sheet.html': 'pug/index.pug'
        },
        options: {
          pretty: true
        }
      }
    },
    'string-replace': {
      default: {
        files: {
          'sheet.css': 'sheet.css'
        },
        options: {
          replacements: [{
            pattern: /\.((?!charsheet)[^ \n]+)(?=.+\{)/g,
            replacement: function(match, p1) {
              return '.sheet-' + p1;
            }
          }]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('default', ['less', 'pug', 'string-replace']);
};

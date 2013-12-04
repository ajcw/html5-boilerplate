module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			local: {
			    files: [
        			{
				        expand: true,
				        cwd:    'css/',
				        src:    ['**/*.less', '!**/_*.less'],
				        dest:   'css/compiled',
				        ext: '.css'
				    }
			    ]
			},
			live: {
				files: {
					'css/compiled/all.css': ['css/*.less', '!css/_*.less']
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			combine: {
				files: {
					'css/compiled/all.min.css': 'css/compiled/all.css'
				}
			}
		},
		concat: {
			combine: {
				files: {
					'js/compiled/all.js': ['js/lib/*.js', 'js/*.js', 'js/controls/*.js']
				}			
			}
		},
		uglify: {
			combine: {
				files: {
					'js/compiled/all.min.js': ['js/compiled/all.js']
				}
			}
		},
		watch: {
			all: {
				files: ['**/*.less', '**/*.js'],
				tasks: ['less', 'cssmin', 'concat', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['less', 'cssmin', 'concat', 'uglify']);

};
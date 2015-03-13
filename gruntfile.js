module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
            htaccess: {
                files: [ 
                    {src: ['.htaccess'], dest: 'maintenance/normal/'}
                ]
            }
        },
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
					'css/all.min.css': 'css/compiled/all.css',
					'css/ie8.min.css': 'css/compiled/ie8.css'
				}
			}
		},
		concat: {
			combine: {
				files: {
					'js/compiled/all.js': ['js/lib/*.js', 'js/*.js', '!js/*.min.js']
				}			
			}
		},
		uglify: {
			combine: {
				files: {
					'js/all.min.js': ['js/compiled/all.js']
				}
			}
		},
		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			src: ['css/compiled/all.css']
		},
		// jshint: {
		// 	all: ['**/*.js', '!js/all.min.js']
		// },
		clean: ['css/compiled', 'js/compiled'],
		watch: {
			all: {
				files: ['**/*.less', '**/*.js', '!js/all.min.js'],
				tasks: ['less', 'cssmin', 'concat', 'uglify']
			}
		},
		'ftp-deploy': {
	        live: {
				auth: {
					host: 'example.com',
					port: 21,
					authKey: 'accountName'
				},
    			exclusions: ['node_modules', '.git*', 'gruntfile.js', '.ftppass', '.csslintrc', '.jshintrc', 'package.json', '*.less', 'js/lib', 'web.config'],
				src: 'C:/\Users/\John Catterfeld/\Dropbox/\Websites/\html5-boilerplate',
				dest: '/public_html/'
			},
	        'live-maintenance-mode': {
				auth: {
					host: 'example.com',
					port: 21,
					authKey: 'accountName'
				},
    			src: 'C:/\Users/\John Catterfeld/\Dropbox/\Websites/\html5-boilerplate/maintenance/in-maintenance/',
				dest: '/public_html/'
			},
	        'live-maintenance-reset': {
				auth: {
					host: 'example.com',
					port: 21,
					authKey: 'accountName'
				},
    			src: 'C:/\Users/\John Catterfeld/\Dropbox/\Websites/\html5-boilerplate/maintenance/normal/',
				dest: '/public_html/'
			},
	        dev: {
				auth: {
					host: 'example.com',
					port: 21,
					authKey: 'accountName'
				},
    			exclusions: ['node_modules', '.git*', 'gruntfile.js', '.ftppass', '.csslintrc', '.jshintrc', 'package.json', '*.less', 'js/lib', 'web.config'],
				src: 'C:/\Users/\John Catterfeld/\Dropbox/\Websites/\html5-boilerplate',
				dest: '/development/'
			}
		},
	    shell: {
	        'git-push': {
	            command: 'git push'
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['less', 'cssmin', 'concat', 'uglify']);
	grunt.registerTask('dev', ['default', 'clean', 'watch']);
	// grunt.registerTask('lint', ['csslint', 'jslint']);
	grunt.registerTask('lint', ['csslint']);
	grunt.registerTask('push', ['shell:git-push']);
	grunt.registerTask('deploy-dev', ['default', 'lint', 'clean', 'ftp-deploy:dev']);
	grunt.registerTask('deploy-live', ['default', 'lint', 'clean', 'copy:htaccess', 'ftp-deploy:live-maintenance-mode', 'ftp-deploy:live', 'ftp-deploy:live-maintenance-reset']);
}
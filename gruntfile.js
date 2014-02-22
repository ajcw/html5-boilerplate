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
					'css/all.min.css': 'css/compiled/all.css'
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
    			exclusions: ['node_modules', '.git*', 'gruntfile.js', '.ftppass', '.csslintrc', 'package.json', '*.less', 'compiled', 'js/lib', 'web.config'],
				src: 'C:/\Users/\John Catterfeld/\Dropbox/\Websites/\html5-boilerplate',
				dest: '/public_html/'
			},
	        dev: {
				auth: {
					host: 'example.com',
					port: 21,
					authKey: 'accountName'
				},
    			exclusions: ['node_modules', '.git*', 'gruntfile.js', '.ftppass', '.csslintrc', 'package.json', '*.less', 'compiled', 'js/lib', 'web.config'],
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

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['less', 'cssmin', 'concat', 'uglify']);
	grunt.registerTask('dev', ['less', 'cssmin', 'concat', 'uglify', 'watch']);
	grunt.registerTask('lint', ['csslint']);
	grunt.registerTask('push', ['shell:git-push']);
	grunt.registerTask('deploy-dev', ['less', 'cssmin', 'concat', 'uglify', 'lint', 'ftp-deploy:dev']);
	grunt.registerTask('deploy-live', ['less', 'cssmin', 'concat', 'uglify', 'lint', 'shell:git-push', 'ftp-deploy:live']);
}
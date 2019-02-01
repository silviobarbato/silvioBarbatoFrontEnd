module.exports = function(grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        serve: {
            option: {
                port: 9000
            }
        },
        browserify: {
            dist: {
                files: {
                    'src/js/boundle.js' : 'src/js/jsCheckout.js'
                }
            }
        },
        watch: {
            script: {
                files: 'src/js/jsCheckout.js',
                tasks: 'browserify'
            },
			dist: {
				files: 'src/sass/styleCheckout.scss',
				tasks: 'sass'
			}
		},
        sass: {
			options: {
			implementation: sass,
			sourceMap: true
	           	},
			dist: {
				files: {
					'src/css/styleCheckout.css' : 'src/sass/styleCheckout.scss'
				}
			}
		},
        cssmin: {
			target: {
				files: {
					'dist/css/styleCheckout.min.css' : ['src/css/styleCheckout.css']
				}
			}
		},
        babel: {
            options: {
                presets : ['env']
            },
            dist: {
                files: {
                    'src/js/boundleEM5.js': 'src/js/boundle.js'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/js/boundle.min.js' : ['src/js/boundleEM5.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.task.registerTask('develop', 'watch');
    grunt.task.registerTask('build', ['cssmin','babel','uglify','serve']);
};

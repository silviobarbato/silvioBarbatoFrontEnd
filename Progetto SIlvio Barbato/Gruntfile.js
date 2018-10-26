
module.exports = function (grunt)
{
	grunt.initConfig({
		serve: {
			options: {
				port: 9000
			}
		},
		browserify: {
			dist: {
				files: {
					'src/js/boundle.js':'src/js/JSPF.js'
				}
			}
		},
		watch: {
			script: {
				   files:'src/js/JSPF.js',
				   tasks:'browserify'
			        },
			dist: {
				files: 'src/css/stilePF.less',
				tasks: 'less'
			}
		},
		
		cssmin: {
			target: {
				files: {
					'dist/css/stilePf.min.css': ['node_modules/bootstrap/dist/css/bootstrap.css','src/css/stilePF.css'] 

				}
			}

		},

		babel: {
			options: {
				presets: ['env'] 
			},
			dist: {
				files: {
					'src/js/boundle-css.js': 'src/js/boundle.js'
				}
			}
		},

		less: {
			development: {
				files: {
					'src/css/stilePF.css': 'src/css/stilePF.less'
				}
			}
		},

		uglify: {
			target: {
				files: {
					'dist/js/boundle.min.js': 'src/js/boundle-css.js'
				}
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.task.registerTask('develop', ['watch']);
	grunt.task.registerTask('build', ['cssmin','browserify','babel','uglify','serve']);
};

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
			        }
		},
		
		cssmin: {
			target: {
				files: {
					'dist/css/stilePf.min.css':'src/css/stilePF.css' 

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
		}
		
	});

	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-babel');

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.task.registerTask('develop', ['less','browserify', 'watch']);
	grunt.task.registerTask('build', ['cssmin','browserify','babel','serve']);
};
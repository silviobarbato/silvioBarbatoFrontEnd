module.exports = function(grunt)
{
	const sass = require('node-sass');
	
	grunt.initConfig({
		serve: {
			option: {
				port: 9000
			}
		},
		watch: {
			dist: {
				files: 'src/sass/styleTelefonia.scss',
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
					'src/css/styleTelefonia.css' : 'src/sass/styleTelefonia.scss'
				}
			}
		},
		cssmin: {
			target: {
				files: {
					'dist/css/styleTelefonia.min.css' : ['src/css/styleTelefonia.css']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.task.registerTask('develop', 'watch');


	grunt.task.registerTask('build', ['cssmin','serve']);
};

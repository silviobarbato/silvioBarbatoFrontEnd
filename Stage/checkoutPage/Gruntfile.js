module.exports = function(grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        serve: {
            option: {
                port: 9000
            }
        },
        watch: {
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
		}
    });

    grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.task.registerTask('develop', 'watch');
    grunt.task.registerTask('build', ['cssmin','serve']);
};

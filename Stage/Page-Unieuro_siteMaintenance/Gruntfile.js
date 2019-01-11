module.exports = function(grunt)
{
	grunt.initConfig({
		serve: {
			option: {
				port: 9000
			}
		},
		cssmin: {
			target: {
				files: {
					'dist/css/CSSUnieuro.min.css' : 'src/css/CSSUnieuro.css'
				} 
			}
		}

	});

	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.task.registerTask('build', ['cssmin','serve']);
};
module.exports = function(grunt) {
	grunt.initConfig({
		dirs: {
	        wptheme_source: 'mytheme',
	        wptheme_staging: '<path>'
	    },
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					'<%= dirs.wptheme_source %>/css/bootstrap.min.css':'src/styles/scss/bootstrap.scss',
					'<%= dirs.wptheme_source %>/css/theme.min.css':'src/styles/scss/theme.scss'
		    	}]
			}
		},
		uglify: {
			dist: {
				files: [{
					'<%= dirs.wptheme_source %>/js/vendor/bootstrap.min.js':'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
				}]
			}
			
		},
		copy: {
			main: {
		    	files: [{
		    		expand: true,
	            	cwd: 'src/styles/',
	            	src: ['style.css'],
			    	dest: '<%= dirs.wptheme_source %>'
		    	}]
		  	},
		  	dist: {
                files: [{
			        expand: true,
			        cwd: '<%= dirs.wptheme_source %>',
			        src: ['**'],
			        dest: '<%= dirs.wptheme_staging %>'
		    	}]
            }
		},
		watch: {
			css: {
				files: ['**/*.scss','**/*.css'],
				tasks: ['sass']
			},
			img: {
				files: ['<%= dirs.wptheme_source %>/img/**'],
				tasks: ['copy']
			},
			theme: {
				files: '<%= dirs.wptheme_source %>/**',
				tasks: ['copy']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default',['sass','uglify','copy', 'watch']);
};

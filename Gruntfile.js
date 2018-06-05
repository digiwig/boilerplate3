module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// configure concat to concatenate js files -------------------------------
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					'<%= pkg.assets %>js/src/vendor/jquery-3.3.1.js',
					'<%= pkg.assets %>js/src/vendor/plugins/jquery.throttle-debounce.js',
					'<%= pkg.assets %>js/src/vendor/plugins/jquery.inview.min.js',
					'<%= pkg.assets %>js/src/vendor/plugins/jquery.validate.min.js',
					'<%= pkg.assets %>js/src/vendor/plugins/jquery.flexslider-min.js',
					'<%= pkg.assets %>js/src/vendor/fastclick.js',
					'<%= pkg.assets %>js/src/components.js'
				],
				dest: '<%= pkg.assets %>js/<%= pkg.name %>.js'
			}
		},		
		uglify: {
			dist: {
				files: {
					'<%= concat.dist.dest %>': ['<%= concat.dist.dest %>']
				}
			}
		},	
		sass: {
			dist: {
				options: { 					
					style: 'compressed', //nested, compact, compressed, expanded
					sourcemap: 'none', // auto, file, inline, none
					lineNumbers: false,
					noCache: true
				},				
				files: {
					'<%= pkg.assets %>css/styles.css': '<%= pkg.assets %>css/scss/styles.scss',
					'<%= pkg.assets %>css/ie.css': '<%= pkg.assets %>css/scss/ie.scss'
				}
			}
		},
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({browsers: '>1%, last 8 versions'}), 
					require('cssnano')()
				]
			},
			dist: {
				src: '<%= pkg.assets %>css/styles.css'
			}
		},
		watch: {
			stylesheets: {
				files: '**/*.scss',
				tasks: ['sass', 'postcss']
			},
			scripts: {
				files: ['<%= concat.dist.src %>'],
				tasks: ['concat', 'uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat','uglify','sass', 'postcss']);
}
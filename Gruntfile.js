module.exports = function( grunt ) {

grunt.loadNpmTasks( 'grunt-webfont' );

grunt.initConfig( {
	webfont: {
		icons: {
			src: 'node_modules/oojs-ui/src/themes/mediawiki/images/icons/*.svg',
			dest: '.',
			options: {
				font: 'WikimediaIcons',
				fontFilename: 'wikimedia-icons',
				fontFamilyName: 'Wikimedia Icons',
				order: 'woff,eot,ttf,svg',
				hashes: false,
				htmlDemoFilename: 'index'
			}
		}
	}
} );

grunt.registerTask('default', ['webfont']);

};

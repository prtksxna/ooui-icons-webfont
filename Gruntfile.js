module.exports = function( grunt ) {

grunt.loadNpmTasks( 'grunt-webfont' );

grunt.initConfig( {
	pkg: grunt.file.readJSON( 'package.json' ),
	webfont: {
		icons: {
			src: 'node_modules/oojs-ui/src/themes/mediawiki/images/icons/*.svg',
			dest: '.',
			options: {
				version: '<%=pkg.devDependencies[ "oojs-ui" ]%>',
				font: 'WikimediaIcons',
				fontFilename: 'wikimedia-icons',
				fontFamilyName: 'Wikimedia Icons',
				types: 'woff2,woff,eot,ttf',
				order: 'woff2,woff,eot,ttf',
				hashes: false,
				htmlDemoFilename: 'index',
				htmlDemoTemplate: 'templates/demo.html'
			}
		}
	}
} );

grunt.registerTask('default', ['webfont']);

};

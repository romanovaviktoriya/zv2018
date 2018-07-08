Установить node.js

Установить Git

Выполнить:

npm init

npm install gulp

C:\OpenServer\domains\galp4>gulp -v
[08:46:51] CLI version 3.9.1
[08:46:51] Local version 4.0.0-alpha.2

C:\OpenServer\domains\galp4>node -v
v6.11.1

C:\OpenServer\domains\galp4>npm -v
3.10.10



INSTALL

npm install gulp-scss

npm install gulp-less

npm install gulp-sourcemaps

npm install gulp-debug

npm install gulp-if

npm install del

npm install browser-sync

npm install gulp-notify

npm i stream-combiner2

npm install gulp-cssnano

npm install gulp-concat

npm install gulp-csso

npm install gulp-uglify


C:\OpenServer\domains\galp4>gulp
[09:24:49] Using gulpfile C:\OpenServer\domains\galp4\gulpfile.js
C:\Users\ShipGo\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js:129
    gulpInst.start.apply(gulpInst, toRun);
                  ^

TypeError: Cannot read property 'apply' of undefined
    at C:\Users\ShipGo\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js:129:19
    at _combinedTickCallback (internal/process/next_tick.js:73:7)
    at process._tickCallback (internal/process/next_tick.js:104:9)
    at Module.runMain (module.js:606:11)
    at run (bootstrap_node.js:389:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:504:3

C:\OpenServer\domains\galp4>npm i -g gulp-cli

C:\OpenServer\domains\galp4>gulp -v
[09:31:37] CLI version 1.3.0
[09:31:37] Local version 4.0.0-alpha.2

C:\OpenServer\domains\galp4>gulp
[09:33:04] Using gulpfile C:\OpenServer\domains\galp4\gulpfile.js
[09:33:04] Task never defined: default
[09:33:04] To list available tasks, try running: gulp --tasks

C:\OpenServer\domains\galp4>gulp --tasks
[09:33:20] Tasks for C:\OpenServer\domains\galp4\gulpfile.js
[09:33:20] ├── assets
[09:33:20] ├─┬ build
[09:33:20] │ └─┬ <series>
[09:33:20] │   ├── clean
[09:33:20] │   └─┬ <parallel>
[09:33:20] │     ├── styles
[09:33:20] │     └── assets
[09:33:20] ├── clean
[09:33:20] ├─┬ dev
[09:33:20] │ └─┬ <series>
[09:33:20] │   ├─┬ build
[09:33:20] │   │ └─┬ <series>
[09:33:20] │   │   ├── clean
[09:33:20] │   │   └─┬ <parallel>
[09:33:20] │   │     ├── styles
[09:33:20] │   │     └── assets
[09:33:20] │   └─┬ <parallel>
[09:33:20] │     ├── watch
[09:33:20] │     └── serve
[09:33:20] ├── serve
[09:33:20] ├── styles
[09:33:20] └── watch

/* Фавикон для сайта (замечательная альтернатива - генератор фавикон из имеющейся картинки https://realfavicongenerator.net) */

УСТАНОВИТЬ:

npm i gulp-real-favicon

ДОБАВИТЬ в gulpfile.js:

var realFavicon = require ('gulp-real-favicon');
var fs = require('fs');

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: 'frontend/master_picture.png',
		dest: 'public/',
		iconsPath: '/',
		design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: '#ffffff',
				margin: '14%',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#ffffff',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'backgroundAndMargin',
				margin: '17%',
				backgroundColor: '#ffffff',
				themeColor: '#ffffff',
				manifest: {
					name: 'Поток',
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: true,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'blackAndWhite',
				threshold: 73.4375,
				themeColor: '#0076a3'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('inject-favicon-markups', function() {
	return gulp.src(['frontend/assets/*.html'])
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
		.pipe(gulp.dest('frontend/'));
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function(done) {
	var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});
//'esversion: 6'

// ----------------------------------------------------------------------------
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var historyApiFallback = require('connect-history-api-fallback');
var reload = browserSync.reload;
var babel = require('gulp-babel');


// to get live review and live reload I should use browser-sync

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
    'react',
    'react-dom',
    'redux',
    'react-redux'
];
// keep a count of the times a task refires
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function() {
    bundleApp(false);
});

gulp.task('deploy', function() {
    bundleApp(true);
});

gulp.task('sass', function() {
    return sass('../MediaApp_Scotch/source/assets/scss/**/*.scss', { sourcemap: true })
        .on('error', function(err) {
            console.error('Error! ', err.message);
        })
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('../MediaApp_Scotch/public/assets/css/'))
        .pipe(browserSync.stream());
});

// gulp.task('sass', function() {
//     return gulp.src('../GettingStartTut_TicTacToe/source/assets/scss/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('../GettingStartTut_TicTacToe/public/assets/css/'))
//         .pipe(browserSync.reload({ stream: true }));
// });

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: './',
            middleware: [historyApiFallback()]
        }
    });

    gulp.watch(['../MediaApp_Scotch/source/assets/js/**/*.js*'], ['scripts']);
    gulp.watch(['../MediaApp_Scotch/source/assets/scss/**/*.scss'], ['sass']);
    gulp.watch("*.html").on("change", reload);
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['scripts', 'watch']);

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
    scriptsCount++;
    // Browserify will bundle all our js files together in to one and will let
    // us use modules in the front end.

    // the main files that need to transform and browserify
    var files = ['../MediaApp_Scotch/source/assets/js/app.js', '../MediaApp_Scotch/source/assets/js/page1.js'];

    // var appBundler = browserify({
    //     entries: [entry],
    //     debug: true
    // });



    // If it's not for production, a separate vendors.js file will be created
    // the first time gulp is run so that we don't have to rebundle things like
    // react everytime there's a change in the js file
    if (!isProduction && scriptsCount === 1) {
        // create vendors.js for dev environment.
        browserify({
                require: dependencies,
                debug: true
            })
            .bundle()
            .on('error', gutil.log)
            .pipe(source('vendors.js'))
            .pipe(gulp.dest('../MediaApp_Scotch/public/assets/js/'));
    }

    // this has been stops because I Use different a broch
    // if (!isProduction) {
    //     // make the dependencies external so they dont get bundled by the 
    //     // app bundler. Dependencies are already bundled in vendor.js for
    //     // development environments.
    //     dependencies.forEach(function(dep) {
    //         appBundler.external(dep);

    //     });
    // }

    var tasks = files.map(function(entry) {
        var filename = entry.substr(entry.lastIndexOf('/') + 1);

        var browserObj = browserify({
            entries: [entry],
            debug: true,
            filename: filename,
            fullPaths: false,
            insertGlobals: false
        });

        // gutil.log(filename);
        // gutil.log('--------------------');

        if (!isProduction) {
            dependencies.forEach(function(dep) {
                browserObj.external(dep);
            });
        }

        browserObj
            .transform("babelify", { presets: ["es2015", "react", "stage-3"], plugins: ['babel-polyfill'] })
            .bundle()
            .on('error', gutil.log)
            .pipe(source(filename))
            // rename them to have "bundle as postfix"
            .pipe(rename({
                extname: '.bundle.js'
            }))
            .pipe(gulp.dest('../MediaApp_Scotch/public/assets/js/'));

    });
    browserSync.reload();


    //'babel-plugin-transform-runtime',  'regenerator-runtime'

    // appBundler
    // // transform ES6 and JSX to ES5 with babelify
    //     .transform("babelify", { presets: ["es2015", "react"] })
    //     .bundle()
    //     .on('error', gutil.log)
    //     .pipe('buncle.js')
    //     .pipe(gulp.dest('../MediaApp_Scotch/public/assets/js/'));
    // //.gulp.dest('../MediaApp_Scotch/public/assets/js/');
    // browserSync.reload();
}


// gulp.task('sass', function() {
//     var autoprefixerOptions = {
//         browsers: ['last 2 versions']
//     };

//     var filterOptions = '**/*.css';

//     var reloadOptions = {
//         stream: true,
//     };

//     //return gulp.src('source/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('public/assets/stylesheets'));
//     return sass('source/assets/scss/**/*.scss', { sourcemap: true, noCache: true })
//         // for inline sourcemaps
//         .pipe(plumber(plumberOptions))
//         .pipe(autoprefixer(autoprefixerOptions))
//         .pipe(sourcemaps.write())
//         //for file sourcemaps
//         .pipe(sourcemaps.write('maps'), {
//             includeContent: false,
//             sourceRoot: 'source'
//         })
//         .pipe(gulp.dest('public/assets/css'))
//         .pipe(filter(filterOptions))
//         .pipe(reload(reloadOptions));

// });
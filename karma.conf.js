// // Karma configuration
// // Generated on Tue Nov 13 2018 10:40:23 GMT+0300 (E. Africa Standard Time)

// module.exports = function (config) {
//   config.set({

//     // base path that will be used to resolve all patterns (eg. files, exclude)
//     basePath: '',


//     // frameworks to use
//     // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//     frameworks: ['jasmine'],

//     plugins: [
//       'karma-jasmine',
//       'karma-webpack',
//       'karma-coverage',
//       'karma-remap-istanbul',
//       'karma-chrome-launcher',
//     ],

//     // list of files / patterns to load in the browser
//     files: [
//     ],


//     // list of files to exclude
//     exclude: [
//     ],


//     // preprocess matching files before serving them to the browser
//     // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//     preprocessors: {
//       '**/src/**/*.spec.(ts|js)':
//        ['sourcemap', 'webpack', 'coverage']
//     },


//     // test results reporter to use
//     // possible values: 'dots', 'progress'
//     // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//     // reporters: ['progress', 'coverage', 'remap-coverage'],
//     reporters: [ 'coverage'],

    
//     coverageReporter = {
//       type : 'html',
//       dir : 'coverage/'
//     },

//     // web server port
//     port: 9876,


//     // enable / disable colors in the output (reporters and logs)
//     colors: true,


//     // level of logging
//     // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//     logLevel: config.LOG_INFO,


//     // enable / disable watching file and executing tests whenever any file changes
//     autoWatch: true,


//     // start these browsers
//     // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//     browbrowsers: ['Chrome'],
//     customLaunchers: {
//       ChromeHeadlessCI: {
//         base: 'ChromeHeadless',
//         flags: ['--no-sandbox']
//       }
//     },


//     // Continuous Integration mode
//     // if true, Karma captures browsers, runs the tests and exits
//     singleRun: false,

//     // Concurrency level
//     // how many browser should be started simultaneous
//     concurrency: Infinity
//   })
// }

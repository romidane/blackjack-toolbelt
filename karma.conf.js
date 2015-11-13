module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-jquery', 'jasmine'],
    browsers: ['PhantomJS2'],
    singleRun: false,
    basePath: '../../',
    files: [
      { pattern: 'test/fixtures/*.html', included: false, served: true },
      'scripts/*.js',
      'test/**/*.js',
      'node_modules/component-tools/testBootstrap.js',
    ]
  });
};

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-jquery', 'jasmine'],
    browsers: ['PhantomJS2'],
    singleRun: true,
    basePath: '../../',
    files: [
      { pattern: 'test/fixtures/*.html', included: false, served: true },
      'node_modules/sinon/pkg/sinon.js',
      'scripts/*.js',
      'test/**/*.js',
      'node_modules/component-tools/testBootstrap.js',
    ],
    reporters: ['specjson', 'dots'],
    specjsonReporter: {
      outputFile: "node_modules/component-tools/karma-specs.json"
    }
  });
};

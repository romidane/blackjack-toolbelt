module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS2'],
    singleRun: true,
    files: [
      '../../test/**/*.js'
    ]
  });
};

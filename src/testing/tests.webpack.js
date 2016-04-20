var consts = require('../constants');

var testsContext = require.context(consts.WORKING_DIR + '/tests', true, /\.js$/);
testsContext.keys().forEach(testsContext);

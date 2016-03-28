var consts = require('../bjconstants');

var testsContext = require.context(consts.WORKING_DIR + '/tests', true, /\.js$/);
testsContext.keys().forEach(testsContext);
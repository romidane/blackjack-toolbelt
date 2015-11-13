#!/usr/bin/env node
'use strict';

require('babel/register')({
    test: 'value',
    ignore: false,
    only: [
        'node_modules/**/*'
    ]
});

module.exports = require('index');

#!/usr/bin/env node
'use strict';

require('babel/register')({
    ignore: false,
    only: [
        'node_modules/'
    ]
});

module.exports = require('index');

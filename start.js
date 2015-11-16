#!/usr/bin/env node
'use strict';

require('babel/register')({
    ignore: false
});

module.exports = require('index');

'use strict';

module.exports =
  angular.module('gulp_demo.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);

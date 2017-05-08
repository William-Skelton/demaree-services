'use strict';

// require('./scss/main.scss');

const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const path = require('path');

const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');

const DemereeServices = angular.module('DemereeServices', [uiRouter, ngFileUpload]);

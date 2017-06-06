'use strict';

require('./scss/main.scss');

const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const path = require('path');
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');

const demareeServices = angular.module('demareeServices', [uiRouter, ngFileUpload]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( key => {
  demareeServices.config(context(key));
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  demareeServices.component(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  demareeServices.service(name, module);
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  demareeServices.controller(name, module);
});

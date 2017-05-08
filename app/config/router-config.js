'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('' , '/home');
  $urlRouterProvider.when('/' , '/home');

  let states = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'about',
      url: '/about',
      template: require('../view/about/about.html'),
      controller: 'AboutController',
      controllerAs: 'aboutCtrl'
    }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
};
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
      name: 'services',
      url: '/services',
      template: require('../view/services/services.html'),
      controller: 'ServicesController',
      controllerAs: 'servicesCtrl'
    },
    {
      name: 'testimonials',
      url: '/testimonials',
      template: require('../view/testimonials/testimonials.html'),
      controller: 'HomeController',
      controllerAs: 'testimonialsCtrl'
    },
    {
      name: 'blog',
      url: '/blog',
      template: require('../view/blog/blog.html'),
      controller: 'BlogController',
      controllerAs: 'blogCtrl'
    }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
};

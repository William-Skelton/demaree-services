'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', NavbarController],
  controllerAs: 'navbarCtrl'
};

function NavbarController($log, $location, $rootScope) {
  $log.debug('NavbarController');

  this.showHome = function() {
    $location.url('/home');
  }

  this.showServices = function() {
    $location.url('/services');
  }

  this.showTestimonials = function() {
    $location.url('/testimonials');
  }

  this.showRates = function() {
    $location.url('/rates');
  }

  this.showPersonnel = function() {
    $location.url('/personnel');
  }

  this.showBlog = function() {
    $location.url('/blog');
  }

};

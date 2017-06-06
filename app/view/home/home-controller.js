'use strict';

require('./_home.scss');

module.exports = ['$log', '$location', 'postService', HomeController];

function HomeController($log, $location, postService) {
  $log.debug('HomeController');
  let url = $location.url();
  // console.log('postService:', postService);

  this.logOne = function() {
    console.log(1);

    postService.logTwo();
  }
  this.postStuff = function() {
    postService.postCard();
  }
};

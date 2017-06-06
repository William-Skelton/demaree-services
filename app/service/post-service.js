'use strict';

module.exports = ['$q', '$log', '$window', '$http', postService];

function postService($q, $log, $window, $http) {
  $log.debug('postService');

  var authenticationSuccess = function() { console.log('Successful authentication'); };
  var authenticationFailure = function() { console.log('Failed authentication'); };

  let service = {};

  service.test = 'test';

  Trello.authorize({
    type: 'popup',
    name: 'demaree services',
    // Key is gone for security reasons
    key: `${process.env.__API_KEY__}`,
    scope: {
      read: 'true',
      write: 'true' },
      expiration: 'never',
      success: authenticationSuccess,
      error: authenticationFailure
    });
  service.postCard = function() {


    var myList = '5936f4ab4233184970aef762';
    var creationSuccess = function(data) {
      console.log('Card created successfully. Data returned:' + JSON.stringify(data));
    };

    var newCard = {
      name: 'Tiny Rick',
      desc: 'Im Tiny Rick Mother-Fucker!',
      // Place this card at the top of our list
      idList: myList,
      pos: 'bottom'
    };

    Trello.post('/cards/', newCard, creationSuccess);

  }

  service.logTwo = function() {
    console.log('Two');
  }
  console.log(service);
  return service;
}

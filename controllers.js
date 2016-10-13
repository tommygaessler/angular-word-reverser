(function() {
  'use strict';

  const app = angular.module('word-reverser');

  app.controller('reverse-word', function() {

    this.reverse = function(word) {
      return word.split('').reverse().join('');
    }
  });
}());

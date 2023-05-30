angular.
  module('cinemaApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/register', {
          template: '<registration></registration>'
        }).
        when('/login', {
          template: '<login></login>'
        }).
        when('/cinemas', {
          template: '<cinema-list></cinema-list>'
        }).
        when('/cinemas/:cinemaId', {
          template: '<hall-list></hall-list>'
        }).
        when('/halls/:hallId', {
          template: '<session-list></session-list>'
        }).
        when('/tickets/:sessionId', {
          template: '<ticket-list></ticket-list>'
        }).
        otherwise('/login');
    }
  ]);
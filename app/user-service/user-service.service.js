'use strict';

angular.module('userService')
    .factory('userService', ['$cookies',
        function ($cookies) {
            var self = this;

            var loginByCredentials = function (resp) {
                $cookies.put('currentUser', resp.data.login);
                $cookies.put('jwtToken', resp.data.jwtToken);
            }

            var logoutCurrentUser = function() {
                $cookies.put('jwtToken', null);
                $cookies.put('currentUser', null);
            }

            var getCurrentUser = function () {
                return $cookies.get('currentUser');
            }

            var getJwtToken = function () {
                return $cookies.get('jwtToken');
            }

            return {
                loginByCredentials: loginByCredentials,
                logoutCurrentUser: logoutCurrentUser,
                getCurrentUser: getCurrentUser,
                getJwtToken: getJwtToken
            };
        }
    ]);
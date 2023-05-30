angular.
    module('ticketList').
    component('ticketList', {
        templateUrl: 'ticket-list/ticket-list.template.html',
        controller: ['$http', '$routeParams', 'userService',
            function TicketListController($http, $routeParams, userService) {
                var self = this;

                if (userService.getCurrentUser() === null) {
                    window.location.href = 'http://localhost:8000/#!/login';
                }

                $http.get('http://localhost:8080/tickets/' + $routeParams.sessionId,
                    {
                        headers: { 'Authorization': userService.getJwtToken() }
                    }).then(function (response) {
                        self.tickets = response.data;
                    });

                self.buyClick = function buyClick(event, ticket) {

                    $http.put('http://localhost:8080/tickets/' + ticket.id, null,
                        {
                            headers: { 'Authorization': userService.getJwtToken() }
                        }).then(function (response) {
                            $http.get('http://localhost:8080/tickets/' + $routeParams.sessionId,
                                {
                                    headers: { 'Authorization': userService.getJwtToken() }
                                }).then(function (response) {
                                    self.tickets = response.data;
                                });
                        });


                };

                self.logoutClick = function logoutClick(event) {
                    userService.logoutCurrentUser();
                    window.location.href = 'http://localhost:8000/#!/login';
                };
            }
        ]
    });
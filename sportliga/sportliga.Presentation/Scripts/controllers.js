'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | Rafael Sequeiros';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | Sign In';
        $scope.username = "";
        // TODO: Authorize a user
        $scope.login = function () {
            console.log($scope.username);
            if($scope.username === "Admin")
            $location.path('/profile');
            else if ($scope.username === "Usuario")
                $location.path('/VistaUsuario');
            return false;

        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
        $scope.register = function() {
            $location.path('/register');
            return false;
        };

    }])

     // Path: /register
    .controller('RegisterCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | Register';
        // TODO: Register a new user
        $scope.login = function () {
            $location.path('/login');
            return false;
        };
    }])

     // Path: /forgot-password
    .controller('ForgotPasswordCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Recuperar password';
        // TODO: Forgot password
        $scope.RecoverPassword = function () {
            $scope.ShowMessage = true;
           // $location.path('/RecoverPassword');
            return false;
        };
    }])
        
    
    // Path: /profile
    .controller('ProfileCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | Mi perfil';
        // TODO: Forgot password
// ReSharper disable once WrongExpressionStatement
        $scope.Partidos = [
            {
                equipo1: "RealMadrid",
                equipo2: "Barcelona",
                resultado1: "0",
                resultado2: "0"
            },
        {
        equipo1: "Brasil", equipo2: "Suieza",resultado1 :"0",resultado2 : "0"
        },
            {
        equipo1: "Uruguay", equipo2: "Sevilla", resultado1: "1", resultado2: "2"
            },
            {
                equipo1: "Honduras", equipo2: "Holanda",resultado1 :"1",resultado2 : "2"
                
            }

        ];

        $scope.LigaRegistradas = [
        {
            nombre: 'BioloRusia', pais: 'Japon', inicio: new Date(),
            fin: new Date(), cant_equipos: 20, id:7
        },
        {
            nombre: 'Española', pais: 'Inglaterra', inicio: new Date(),
            fin: new Date(), cant_equipos: 20, id: 6
        }
        ];
        $scope.ligas = [
        {
            nombre: 'Española', pais: 'España', inicio: new Date(),
            fin: new Date(), cant_equipos: 20, id:1
        },
        {
            nombre: 'Italiana', pais: 'Italia', inicio: new Date(),
            fin: new Date(), cant_equipos: 21, id: 2
        },
        {
            nombre: 'Inglesa', pais: 'Ingaltera', inicio: new Date(),
            fin: new Date(), cant_equipos: 15, id: 3
        },
        {
           nombre: 'Francesa', pais: 'Francia', inicio: new Date(),
           fin: new Date(), cant_equipos: 21, id: 4
        },
        {
            nombre: 'China', pais: 'China', inicio: new Date(),
            fin: new Date(), cant_equipos: 15, id: 5
        }];

        $scope.ordenarPor = function (orden) {
            $scope.OrdenSeleccionado = orden;
        };

        $scope.addNewLeague = function () {
            $scope.ligas.push({ nombre: $scope.NombreEquipo, IdLiga: $scope.IdLiga });
        };
        $scope.RegisterInNewLeague = function(nombres, paises, dateinicio,datefinal,cantequipos,ids) {
            $scope.LigaRegistradas.push({ nombre: nombres , pais: paises, inicio: dateinicio, fin: datefinal, canequipos: cantequipos, id: ids});
            $scope.RemoveLiga(nombres);
        };
        $scope.RemoveLigaRegister = function (nombres, paises, dateinicio, datefinal, cantequipos, ids)
        {
            $scope.ligas.push({ nombre: nombres, pais: paises, inicio: dateinicio, fin: datefinal, canequipos: cantequipos, id: ids });
            $scope.RemovetheListRegister(nombres);

        };
        $scope.RemoveLiga = function (RemoveName) {
            for (var i = 0; i < $scope.ligas.length; i++) {
                if ($scope.ligas[i].nombre === RemoveName) {
                    $scope.ligas.splice(i, 1);
                    inicio();
                }
            }

        };
        $scope.RemovetheListRegister = function(RemoveName) {
            for (var i = 0; i < $scope.LigaRegistradas.length; i++) {
                if ($scope.LigaRegistradas[i].nombre === RemoveName) {
                    $scope.LigaRegistradas.splice(i, 1);
                    inicio();
                }
            }

        };
        
    }])

      // Path: /league
    .controller('LeagueCtrl', ['$scope', '$location', '$window','$stateParams', function ($scope, $location, $window, $stateParams) {
        $scope.$root.title = 'SportLiga | Liga';

        console.log($stateParams.id);
   
        $scope.FilterTeams = [];

        $scope.teams = [{nombre: 'Levante', id_liga: 1},{nombre: 'Barcelona', id_liga: 1},{nombre: 'Madrid', id_liga: 1},{nombre: 'Liverpool', id_liga: 2},{nombre: 'Manchester', id_liga:2},
        {nombre: 'Chelsea', id_liga: 2},{nombre: 'Genova', id_liga: 3},{ nombre: 'Cagliari', id_liga: 3 }, { nombre: 'Inter', id_liga: 5 }, { nombre: 'Monaco', id_liga: 4 }, { nombre: 'Paris', id_liga: 4 },
        { nombre: 'France', id_liga: 4 }, { nombre: 'Shangai', id_liga: 5 }, { nombre: 'Sheck', id_liga: 5 }, { nombre: 'Chou', id_liga: 5 }];

     
        var inicio = function () {
            $scope.FilterTeams = [];
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].id_liga.toString() === $stateParams.id) {
                    $scope.FilterTeams.push($scope.teams[i]);
                }
            }
        };

        inicio();

        $scope.NombreEquipo = "";

        $scope.addNewTeam = function(){
            var team = {nombre: $scope.NombreEquipo, id_liga:parseInt($stateParams.id)};
            $scope.teams.push(team);
            inicio();
            $scope.NombreEquipo = "";
        };

        $scope.deleteTeam = function (nombre) {
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].nombre === nombre ) {
                    $scope.teams.splice(i,1);
                    inicio();
                }
            }
        };

        $scope.isEditing = false;
        $scope.NombreAnterior = "";
        $scope.NuevoNombre = "";

        $scope.editTeam = function (teamname) {
            $scope.isEditing = true;
            $scope.NombreAnterior = teamname;
            $scope.NuevoNombre = teamname;
        };

        $scope.cancelEdit = function (team) {
            $scope.isEditing = false;
        };
        
        $scope.FinishEditing = function () {
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].nombre === $scope.NombreAnterior) 
                    $scope.teams[i].nombre = $scope.NuevoNombre;
            }
            $scope.isEditing = false;
            $scope.NombreAnterior = "";
            $scope.NuevoNombre = "";

            inicio();
        };

    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);
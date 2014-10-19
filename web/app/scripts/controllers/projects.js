'use strict';

angular.module('webApp')
  .controller('ProjectsCtrl', function ($scope, ProjectsService) {
      ProjectsService.getAll().success(function(data){
          $scope.projects = data;
      });
  });

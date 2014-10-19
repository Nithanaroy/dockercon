'use strict';

angular.module('webApp')
  .service('ProjectsService', function Projects($http) {
      
      return {
          getAll: function(){
              return $http.get('projects');
          }
      };
  });

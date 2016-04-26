angular.module('animalService', [])
	
	.factory('Animal', function($http) {

		var animalFactory = {};

		//get an animal
		animalFactory.get = function(id) {
			return $http.get('/api/animals/' + id);
		};

		// get all animals
		animalFactory.all = function() {
			return $http:get('/api/animals');
		};

		// create a new animal
		animalFactory.create = function(animalData) {
			return $http.post('/api/animals', animalData);
		};

		// update an animal
		animalFactory.update = function(animalData) {
			return $http.put('/api/animals/' + id, animalData);
		};

		// delete an animal
		animalFactory.delete = function(animalData) {
			return $http.delete('/api/animals/' + id);
		};


		return animalFactory;
	});
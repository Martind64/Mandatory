angular.module('animalCtrl', ['animalService'])

	.controller('animalController', function(Animal) {
		var vm = this;

		



		Animal.all()
			.success(function(data) {
				vm.animals = data;
			});


		

	})



	// animal creation
	.controller('animalCreateController', function($location, Animal) {
		var vm = this;

		vm.type = "create";


		vm.saveAnimal = function() {

			vm.message = "";

			Animal.create(vm.animalData)
				.success(function(data) {
					// clear the form

					vm.animalData = {};
					vm.message = data.message;
					$location.path('/animals');
				});


		};

	})


	// animal update
	.controller('animalEditController', function($routeParams, $location, Animal) {
		var vm = this;

		vm.type = 'edit';

		Animal.get($routeParams.animal_id)
			.success(function(data) {
				vm.animalData = data;
			});

		vm.saveAnimal = function() {
			vm.message = "";

			Animal.get($routeParams.animal_id, vm.animalData)
				.success(function(data) {

					//clear form
					vm.animalData = {};
					$location.path('/animals');

					
			});

		};

		vm.deleteAnimal = function(id) {

			Animal.delete(id)
				.success(function(data) {
					Animal.all()
						.success(function(data) {
							vm.animals = data;
							$location.path('/animals');
						});
				});
		};
		
	})



angular.module('animalCtrl', ['animalService'])

	.controller('animalController', function(Animal) {
		var vm = this;

		User.all()
			.success(function(data) {
				vm.animals = data;
			});


		vm.deleteUser = function(id) {

			Animal.delete(id)
				.success(function(data) {
					Animal.all()
						.success(function(data) {
							vm.animals = data;
						});
				});
		};

	})



	// animal creation
	.controller('animalCreateController', function(Animal) {
		var vm = this;

		vm.type = "create";


		vm.saveUser = function() {

			vm.message = "";

			Animal.create(vm.animalData)
				.success(function(data) {
					// clear the form

					vm.animalData = {};
					vm.message = data.message;
				});


		};

	})


	// animal update
	.controller('animalEditController', function(Animal) {
		var vm = this;

		vm.type = 'edit';

		vm.saveAnimal = function() {
			vm.message = "";

			Animal.get($routeParams.user_id, vm.animalData)
				.success(function(data) {

					//clear form
					vm.animalData = {};

					vm.message = data.message;
			});
		};
	})



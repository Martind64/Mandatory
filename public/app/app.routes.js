angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider)
{
	$routeProvider

	// Route for the homepage
	.when('/', 
	{
		templateUrl : 'app/shared/homepage.html'
	})

	// login page
		.when('/login', {
			templateUrl : 'app/shared/login.html',
				controller : 'mainController',
				controllerAs: 'login'
		})

	// users

	//Show all users
		.when('/users', {
			templateUrl : 'app/views/users/all.html',
				controller : 'userController',
				controllerAs : 'user'
		})

		// form to create a new user
		// same view as EDIT PAGE
		.when('/users/create', {
			templateUrl : 'app/views/users/single.html',
				controller : 'userCreateController',
				controllerAs : 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl : 'app/views/users/single.html',
				controller : 'userEditController',
				controllerAs : 'user'
		})





	// ================


	// animals
	.when('/animals', {
			templateUrl : 'app/views/animals/all.html',
				controller : 'animalController',
				controllerAs : 'animal'
		})

		// form to create a new animal
		// same view as EDIT PAGE
		.when('/animal/create', {
			templateUrl : 'app/views/animals/single.html',
				controller : 'animalCreateController',
				controllerAs : 'animal'
		})

		// page to edit a animal
		.when('/animal/:animal_id', {
			templateUrl : 'app/views/animals/single.html',
				controller : 'animalEditController',
				controllerAs : 'animal'
		});


	// get rid of the hash in the url
	$locationProvider.html5Mode(true);
});
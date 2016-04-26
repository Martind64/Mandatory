angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider)
{
	$routeProvider

	// Route for the homepage
	.when('/', 
	{
		templateUrl : 'app/shared/homepage.html'
	})

	// get rid of the hash in the url
	$locationProvider.html5Mode(true);
});
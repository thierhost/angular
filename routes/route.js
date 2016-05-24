'use strict';

app
	.config(
		function($routeProvider){

			$routeProvider
					.when('/items',{
						controller  : 'itemList',
						templateUrl : 'views/items/list.html'

					})

					.when('/items/create',{
						controller  : 'itemCreate',
						templateUrl : 'views/items/create.html'	
					})

					.when('/categories',{
						controller  :  'categoryList',
						templateUrl :  'views/categories/list.html'
					})
					.otherwise({redirectTo : '/'});


}
);
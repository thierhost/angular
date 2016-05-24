'use strict';

app
	.controller('itemIndex',function($scope){

	})
	.controller('itemList',function($scope,itemProvider){

		$scope.items = itemProvider.getItems();
	})

	.controller('itemCreate',function($scope,categoryProvider,itemProvider){
		$scope.categories = categoryProvider.getCategories();
		$scope.items = itemProvider.getItems();

		// on definie ici dans le controler une fonction qui prend en parametre un item et le cree
		$scope.itemCreate = function(item){
			$scope.items = itemProvider.createItem(item);
		};

	})

;
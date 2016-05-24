'use strict';

var items = [
	{ 'name':'demba sarr1','id':1},
	
];


app
	.service('itemProvider',function(){

		this.getItems = function(){
			//fonction de recuperation de la liste des items
			return items;
		};

		this.createItem = function(item)
		{	
			// cette fonction cree un nouvel item base sur un model depuis le formulaire
			items.push(item);
			return items;
		};
});
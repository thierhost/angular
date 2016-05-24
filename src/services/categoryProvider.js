'use strict';

var categories = [
	{'id': 1, 'name':'films'},
	{'id': 2, 'name':'musiques'},
	{'id': 3, 'name':'videos'},
	{'id': 4, 'name':'demba sarr'},
];

app
	.service('categoryProvider',function(){

		this.getCategories = function()
		{
			return categories;
		}
});
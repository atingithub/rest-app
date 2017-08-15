angular.
  module('restApp').
  component('categoryList', {
    templateUrl: 'category-list/category-list.template.html',
    controller: ['Product', '$location',
      function CategoryListController(Product, $location) {
				var self = this;
				
				self.categories = [
										{
												"id": 1,
												"name": "dairy"
										},
										{
												"id": 2,
												"name": "meats"
										},
										{
												"id": 3,
												"name": "bakery"
										},
										{
												"id": 4,
												"name": "fruit & veg"
										}
				];
				
        //self.categoryList = Product.Category.query();
				
				self.products = [
    {
        "categoryId": {
            "id": 2,
            "name": "meats"
        },
        "description": "rolled in fresh herbs<br>2 patties (250g)",
        "id": 21,
        "lastUpdate": "2017-08-11T17:06:34",
        "name": "organic meat patties",
        "price": 2.29
    },
    {
        "categoryId": {
            "id": 2,
            "name": "meats"
        },
        "description": "matured, organic (70g)",
        "id": 22,
        "lastUpdate": "2017-08-11T17:06:34",
        "name": "parma ham",
        "price": 3.49
    },
    {
        "categoryId": {
            "id": 2,
            "name": "meats"
        },
        "description": "free range (250g)",
        "id": 23,
        "lastUpdate": "2017-08-11T17:06:34",
        "name": "chicken leg",
        "price": 2.59
    },
    {
        "categoryId": {
            "id": 2,
            "name": "meats"
        },
        "description": "reduced fat, pork<br>3 sausages (350g)",
        "id": 24,
        "lastUpdate": "2017-08-11T17:06:34",
        "name": "sausages",
        "price": 3.55
    }
];
				
      }
    ]
  });
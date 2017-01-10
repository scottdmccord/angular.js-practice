(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    { name: 'Dodecahedron',
      price: 2.95,
      description: "The prettiest gem to ever gem.",
      canPurchase: true,
      soldOut: false
    },
    { name: 'Shiny Metal',
      price: 4.00,
      description: "Ooh, see how it sparkles.",
      canPurchase: true,
      soldOut: false
    },
    { name: 'Diamond Ruff',
      price: 8.99,
      description: "It's like a diamond, only different.",
      canPurchase: false,
      soldOut: false
    }
  ];


})();


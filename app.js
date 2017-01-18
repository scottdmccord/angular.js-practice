(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  app.directive("productReviews", function(){
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: 'A',
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productTabs", function(){
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function(){
        this.tab = 1;

        this.setTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'tab'
    };
  })

  var gems = [
    { name: 'Dodecahedron',
      price: 2.95,
      description: "The prettiest gem to ever gem.",
      canPurchase: true,
      soldOut: false,
      shine: 8,
      reviews: [{
        stars: 3,
        body: "Greatest gem ever.",
        author: "bob the drag queen",
        createdOn: 1397490980837
      }],
      images: [
        'images/gems/gem-01.png',
        'images/gems/gem-04.png',
        'images/gems/gem-07.png'
      ]
    },
    { name: 'Shiny Metal',
      price: 4.00,
      description: "Ooh, see how it sparkles.",
      canPurchase: true,
      soldOut: false,
      shine: 8,
      reviews: [{
        stars: 3,
        body: "Greatest gem ever.",
        author: "bob the drag queen",
        createdOn: 1397490980837
      }],
      images: [
        'images/gems/gem-02.png',
        'images/gems/gem-05.png',
        'images/gems/gem-08.png'
      ]
    },
    { name: 'Diamond Ruff',
      price: 8.99,
      description: "It's like a diamond, only different.",
      canPurchase: false,
      soldOut: false,
      shine: 8,
      reviews: [{
        stars: 3,
        body: "Greatest gem ever.",
        author: "bob the drag queen",
        createdOn: 1397490980837
      }],
      images: [
        'images/gems/gem-03.png',
        'images/gems/gem-06.png',
        'images/gems/gem-09.png'
      ]
    }
  ];


})();


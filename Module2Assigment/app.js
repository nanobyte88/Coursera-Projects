(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.controller('ToBuyShoppingController', ToBuyShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buyItem = this;

  buyItem.items = ShoppingListCheckOffService.getItems();
  buyItem.buy = function (itemIndex) {
  try {
    ShoppingListCheckOffService.buyItem(itemIndex);
  } catch (error) {
    buyItem.errorMessage = error.message;
  }
  };
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems2();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
    {
      name:'Chips',
      quantity : 7
    },
    {
      name:'Sodas',
      quantity : 2
    },
    {
      name:'Pizzas',
      quantity : 5
    },
    {
      name:'Peanuts',
      quantity : 5
    },
    {
      name:'Tacos',
      quantity : 7
    }
  ];

  var itemsBought = [];

  service.buyItem = function (itemIndex) {
    var nothing = true;

    if(itemsToBuy.length > 1 && itemsBought.length < 5) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);

    }
    else {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
      throw new Error("Everything is Bought!");
    }

    service.getLength();

  };


  service.getItems = function () {
    return itemsToBuy;
  };

  service.getItems2 = function () {
    return itemsBought;
  };

  service.getLength = function(){

    var len = itemsBought;
    console.log(len);
  };

}
})();

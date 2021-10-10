function needFood(money){
    console.log('i need money', money);
console.log('Need more money');
var needMoreFood = 10;
var foodQuantity = money/needMoreFood;
return foodQuantity;
}


var money = 250;
var food = needFood(money);
// needFood(money);
console.log('here is the food',food);

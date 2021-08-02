var burgerPrice = 150;
var pizzaPrize = 80;
var drinkPrize = 120;
var myBudget = 100;
var isPacked = false;

if (burgerPrice < myBudget && myBudget > drinkPrize) {
    if (isPacked == true) {
        console.log("I Will Eat Burger and Drinks");
    }
    else {
        console.log("Food is't Looks Good. I Don't Eat This Burger.");
    }
}
else if (myBudget > pizzaPrize && drinkPrize < myBudget) {
    if (isPacked == true) {
        console.log("I Will Eat Pizza and Drinks");
    }
    else {
        console.log("Food is't Looks Good. I Don't Eat This Pizza.");
    }
}
else {
    console.log("All Food are bad. I Will Eat at My Home");
}
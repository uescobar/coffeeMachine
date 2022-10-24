// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
let water = 0;
let milk = 0;
let coffee = 0;
let disposable_cups = 0;
let money = 0;
let sugar = 0
let sweetness_level = [2, 4, 6, 8, 10, 12, 14];

function init(){
    water = 400; //ml
    milk = 540; //ml
    coffee = 120 //g
    disposable_cups = 9; //cups
    money = 550; //$
    sugar = 120; //g
}

function getStatus(){
    console.log("The coffee machine has: ");
    console.log(water + " ml of water");
    console.log(milk + " ml of milk");
    console.log(coffee + " g of coffee beans");
    console.log(disposable_cups + " disposable cups");
    console.log(sugar + " g of sugar");
    console.log("$" + money + " of money");
    console.log();
}

function menu(){
    let action;
    do {
        action = input("Write action (buy, fill, take, remaining, exit): ");
        switch (action) {
            case "buy":
                let type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
                let sweetness = input("Select sweetness level (1 - 7): ");
                prepareCoffee(type, sweetness);
                break;
            case "fill":
                fill();
                break;
            case "take":
                take();
                break;
            case "remaining":
                console.log();
                getStatus();
                break;
        }
    }while(action != "exit");
}

function prepareCoffee(type, sweetness){
    switch (type) {
        case "1":
            if(water < 250){
                console.log("Sorry, not enough water!")
                break;
            }
            /*if(milk < 250){
                console.log("Sorry, not enough milk!")
                break;
            }*/
            if(coffee < 16){
                console.log("Sorry, not enough coffee!")
                break;
            }
            if(disposable_cups < 1){
                console.log("Sorry, not enough disposable_cups!")
                break;
            }
            //check sweetness
            if(sugar < sweetness_level[sweetness-1]){
                console.log("Sorry, not enough sugar!");
                break;
            }
            console.log("I have enough resources, making you a coffee!");




            water = water - 250;
            //console.log("########### water " + water);
            //milk = milk - 0;
            coffee = coffee - 16;
            money += 4;
            disposable_cups -= 1;
            sugar = sugar - sweetness_level[sweetness-1];
            break;
        case "2":
            if(water < 350){
                console.log("Sorry, not enough water!")
                break;
            }
            if(milk < 75){
                console.log("Sorry, not enough milk!")
                break;
            }
            if(coffee < 20){
                console.log("Sorry, not enough coffee!")
                break;
            }
            if(disposable_cups < 1){
                console.log("Sorry, not enough disposable_cups!")
                break;
            }
            //check sweetness
            if(sugar < sweetness_level[sweetness-1]){
                console.log("Sorry, not enough sugar!");
                break;
            }
            console.log("I have enough resources, making you a coffee!");
            water = water - 350;
            milk = milk - 75;
            coffee = coffee - 20;
            money += 7;
            disposable_cups -= 1;
            sugar = sugar - sweetness_level[sweetness-1];
            break;
        case "3":
            if(water < 200){
                console.log("Sorry, not enough water!")
                break;
            }
            if(milk < 100){
                console.log("Sorry, not enough milk!")
                break;
            }
            if(coffee < 12){
                console.log("Sorry, not enough coffee!")
                break;
            }
            if(disposable_cups < 1){
                console.log("Sorry, not enough disposable_cups!")
                break;
            }
            //check sweetness
            if(sugar < sweetness_level[sweetness-1]){
                console.log("Sorry, not enough sugar!");
                break;
            }
            console.log("I have enough resources, making you a coffee!");
            water = water - 200;
            milk = milk - 100;
            coffee = coffee - 12;
            money += 6;
            disposable_cups -= 1;
            sugar = sugar - sweetness_level[sweetness-1];
            break;
    }
    console.log();
    //getStatus();
}

function fill(){
    water += parseInt(input("Write how many ml of water you want to add: "));
    milk += parseInt(input("Write how many ml of milk you want to add: "));
    coffee += parseInt(input("Write how many grams of coffee beans you want to add: "));
    disposable_cups += parseInt(input("Write how many disposable cups you want to add: "));
    console.log();
    //getStatus();
}

function take(){
    console.log("I gave you $" + money );
    money = 0;
    console.log();
    //getStatus();
}

function calculateIngredients(cups){
    /*console.log("For " + cups +" cups of coffee you will need:");
    console.log((cups * 200) + " ml of water");
    console.log((cups * 50) + " ml of milk");
    console.log((cups * 15) +" g of coffee beans");*/
    let coffee_by_water =  Math.floor(water / 200);
    let coffee_by_milk = Math.floor(milk / 50);
    let coffee_by_beans = Math.floor(coffee / 15);
    let max_coffee_available =  Math.min(coffee_by_water, coffee_by_milk, coffee_by_beans);

    if(max_coffee_available == cups){
        console.log("Yes, I can make that amount of coffee");
    }
    if(max_coffee_available < cups){
        //Math.min([coffe_by_water, coffe_by_milk, coffe_by_beans]);
        console.log("No, I can make only " + max_coffee_available + " cups of coffee");
    }

    if(max_coffee_available > cups){
        console.log("Yes, I can make that amount of coffee (and even " + (max_coffee_available - cups) + " more than that)")
    }

}

// initialize th machine to preset values
init();
//show menu
menu();





// In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'

const shoppingCart =['Milk','Coffee','Tea','Honey'];

// shoppingCart.unshift("Meat")    //task one
// shoppingCart.push("Sugar");     // task two
//shoppingCart.pop()               //task three
console.log(shoppingCart);

if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
}

if(!shoppingCart.includes("sugar")){
    shoppingCart.push("sugar");
    console.log(shoppingCart);
}

var i = shoppingCart.findIndex((e) => e =='Tea');
shoppingCart[i] ="Green Tea";
console.log(shoppingCart);

var honey = true;
if((honey = true)){
    shoppingCart.filter((e) => e!= "Honey");
    console.log(honey);
}
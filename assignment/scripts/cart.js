console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];

function addItem(item){
    basket.push(item);
    return true;

}
addItem('turkey');
addItem('ice cream');
console.log(basket);

function listItems(){
    for (let item of basket){
        console.log (item);
    }
}

listItems(basket);

function empty (){
    basket.length = 0;
}

empty(basket);
console.log(basket);

console.log(`basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apple'));
console.log(`Basket is now ${basket}`);
console.log('Adding banana (expect true)', addItem('banana'));
console.log(`Basket is now ${basket}`);
console.log('Adding cherry and orange', addItem('cherry, orange'));
console.log(`Basket is now ${basket}`);











// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}

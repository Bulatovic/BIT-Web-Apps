/* 1.
Write a function that capitalizes the first letter of each string argument it receives.
	Function arguments: ['hello', 'there', 'ES', 6]
    Output: ['Hello', 'There', 'ES']*/

let arr = ['hello', 'there', 'ES', 6];

const result = arr.filter(function (element) {
    return typeof element === 'string'
}).map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
})


console.log(result);

/* 2.
Write a function that calculates sale tax that should be paid for the product of the given price.
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only
*/2.

let items = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];
let tax = 20;



/*3.
Write a function that increases each element of the given array by the given value. 
If the value is omitted, increase each element of the array by 1.   */

let niz1 = [4, 6, 11, -9, 2.1];

function increase(inputArr, value = 1) {
    return inputArr.map(function (el, i, ceoN) {
        return el + value
    })
}

console.log(increase(niz1, 2));


/*4.Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
 */

let arr2 = [6, 11, 9, 0, 3];

const result = arr2.filter(function (elem, i, ceoNiz) {
    if (elem % 2 === 0) {
        return true
    }

    return false
})
console.log(result);



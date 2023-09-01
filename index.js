// 1. Find the sum of all the multiples of 3 or 5 below 1000.

function multiples(n) {
    const y = n-1;
    let sum = 0;

    if (y === 3) return 3;

    if (y%3 === 0 || y%5 === 0) {
        sum+= y;
        return sum + multiples(y);
    }

    return sum + (multiples(y));
}

// 2. By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.

//  ------pending
function fib(n) {
    let sum = 0;
    if (n <= 1) return 1;

    return sum + fib(n-1) + fib(n-2);
}

//  3. Get largest prime factor of 600851475143

//  ------pending
function largestPrimeFactor(n) {
    return;
}

//   4. Find the largest palindrome made from the product of two 3-digit numbers.

function largestPal(x, y) {
    const product = x * y;

    const q = product.toString();
    const z = q.split('').reverse().join('');

    if (q === z) return product;

    return largestPal(x, y-1);
}


// 5. What is the smallest positive number that is evenly divisible by all of the numbers from  1 to 20?

function findLCM(a, b) {
    let aMultiplier = 1;
    let bMultiplier = 1;
    let aProduct = a;
    let bProduct = b;

    while (aProduct !== bProduct) {
        aProduct = a * aMultiplier;
        bProduct = b * bMultiplier;

        if (aProduct > bProduct) {
            bMultiplier++;
        } else if (aProduct < bProduct) {
            aMultiplier++;
        } else {
            return aProduct;
        }
    }
}

function smallestMultiple(x, y) {
    if (x > y) return 1;

    const product = smallestMultiple(x+1, y);
    return findLCM(product, x);
}

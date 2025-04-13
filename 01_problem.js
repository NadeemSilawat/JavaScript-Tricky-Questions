
// 1. What will this log and why?

console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});


//  Why?
// [] + [] → both arrays become "", result is "".

// [] + {} → [] becomes "", {} becomes "[object Object]".

// {} alone is interpreted as a code block unless it's wrapped. So {} + [] is actually +[] → 0.


/* ------------------------------------------------ */

//  2. What’s the output here?

let a = null;
let b = undefined;

console.log(a == b); // true
console.log(a === b); // false
/* ------------------------------------------------ */
// 3. What does this return?

    // Step 1
    // function foo(){
    //     return {
    //         bar : 'Hello World',
    //     };
    // }
    // console.log(foo()); // { bar: 'Hello World' }

    // Step 2
    function foo(){
        return
        {
            bar : 'Hello World'
        };
    }
    console.log(foo()); // undefined


    // Why?
    // Due to automatic semicolon insertion,
    // the return statement ends at the line,
    // and the object is never returned.

/* ------------------------------------------------ */

// 4. What’s the value of this in an arrow function?

    const obj = {
        name: 'John',
        getName: () => {
            console.log(`Hello, my name is ${this.name}` );
        }
    };
    obj.getName(); // Hello, my name is undefined

    // Why? 
    // In arrow functions, this is lexically bound,
    // meaning it takes this from the surrounding context.

// Without arrow function
    const obj2 = {
        name: 'John',
        getName: function() {
            console.log(`Hello, my name is ${this.name}` );
        }
    };
    obj2.getName(); // Hello, my name is John
// Why?
// In regular functions, this refers to the object that calls the function,

/* ------------------------------------------------ */
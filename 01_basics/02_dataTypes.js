"use strict";
// to treat all js code as newer version

// alert("Hello World") , can't use alert because we are using node not browser

/* 
===========
primitive
===========
1. number
2. bigint
3. string
4. boolean
5. null => value is empty(standalone value)
6. undefined => value not assigned yet
7. symbol => unique

==============
Non Primitive
==============
Object
*/

let age = 21
let name = 'junaid'
let isWorking = true

console.table([typeof age, typeof name, typeof isWorking, typeof null, typeof undefined]);
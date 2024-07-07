// data types conversion

let age = 33
let ageString = String(age)

let ageNumber = Number(ageString)

let ageBoolean1 = Boolean(ageNumber)
let ageBoolean2 = Boolean(ageString)

console.table([age, ageString, ageNumber, ageBoolean1, ageBoolean2, Boolean(""), Boolean(null), Boolean(undefined), Number(null), String(undefined)])
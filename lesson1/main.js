// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log


let hello = 'hello';


let owu= 'owu';
let com='com';


let ua='ua';

let a1=1;
let b1= 10;
let c1=-999;
let d= 123;
let pi= 3.14
let e=2.7
let f=16;

let tr=true;
let fl=false;

 console.log(hello)
console.log(owu)
console.log(com)
console.log(ua)

console.log(a1,b1,c1,d,pi,e,f,tr,fl)

//
// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Tetiana';
 let middleName = 'Bogdanivna';
 let lastName= 'Sheremet';

 let person= firstName + ' ' +middleName+ ' ' + lastName;
 console.log(person)

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a=100;
 let b='100';
 let c =true;

 console.log(typeof a);

console.log(typeof b);

console.log(typeof c);

//
// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name= prompt('Enter your name:');

let middlName=prompt('Enter your middle name:')

let age= prompt('Enter your age:')

console.log(`You are: ${name} ${middlName} ${age}`)

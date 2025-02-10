// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area (a,b){

    return a*b

}

let area1 = area(4,6);
console.log(area1)

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

 function areaOfCircle(r){

    return Math.PI* Math.pow(r, 2)

 }


 let circle = areaOfCircle(4);
console.log(circle)

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfCylinder (h,r){

    return 2*Math.PI*r*(h+r)

}

let cylinder= areaOfCylinder(10,5)
console.log(cylinder)

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayPrinter(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}

arrayPrinter([23,4,5,612,98,2]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент



function paragraph (text){
   document.write(`
    
     <p> ${text}</p>
    `)
}


paragraph("Hello world!")
//
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function threeLi (text){
    document.write(`
    <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>
    `)
}


threeLi("Buy milk")

// створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function list(text, amount){
    document.write(`<ul>`)

    for(let i=0; i<amount;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

list('Bye bye',20)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function liBuilder(array){
    document.write(`<ul>`)

    for(let i=0; i<array.length;i++){
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)

}


liBuilder([1,2,3,true,false,'yes','no'])

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//     #pghbnSB


function divBuilder(arrayOfObjects){
    for(let object of arrayOfObjects){
        document.write(`
         
         <div class="user">
         Id:${object.id}
         name:${object.name}
         age:${object.age}
</div>
        
        `)
    }
}


let users = [
    {id:1,name:"vasya",age:34},
    {id:2,name:"iryna",age:15},
    {id:3,name:"solomiya",age:20},
    {id:4,name:"vika",age:22},
    {id:5,name:"ira",age:24}
]


divBuilder(users)


// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


function minNumber(array){
    let min = array[0];

    for(let i=1; i<array.length;i++){
        if(array[i]<min){
            min=array[i]
        }
    }

    return min
}

let arr =[1,3,4,2,-5]
let minOfArray= minNumber(arr)
console.log(minOfArray)
//
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


function sumOfArray(array){
    let sum=0
    for(let element of array){
        sum+=element
    }
    return sum;
}


let sum = sumOfArray([1,2,3,4,5])
console.log(sum)
//
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2){
    let temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;

    return arr
}


let swappedArray=swap([1,2,3],0,2)

console.log(swappedArray)
//
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


function exchange(sumUAH,currencyValues,exchangeCurrency){
    let finalSum
    for(let currencyObj of currencyValues){
        if(currencyObj.currency===exchangeCurrency){
             finalSum=sumUAH/currencyObj.value
        }
    }
    return finalSum
}


let moneyExc=exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')

console.log(moneyExc)
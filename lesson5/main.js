let rectangleSquare = (a,b)=> a*b
//
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleSquare = (r)=> Math.PI * Math.pow(r,2)

    // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderSquare=(r,h)=> 2*Math.PI*r*(h+r)

// створити функцію яка приймає масив та виводить кожен його елемент


let arrayUnpacking=(array)=> {
    for(let element of array){
        console.log(element)
    }

}
let testArr=[1,2,3,4,5]

arrayUnpacking(testArr)

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraphWriter = (text) => {

    document.write(`  <p>  ${text} </p>   `);
};

paragraphWriter("Hello World");
//
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let ulCreator = (text)=>
{

    document.write(`<ul>`)

    for(let i=0;i<3;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)

}

ulCreator('Hello, it is ul')
//
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
let ulCreator2=(text, amount)=>{

    document.write(`<ul>`)

    for(let i=0;i<amount;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

ulCreator2("Hello world",10)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayList = (array)=>{
    document.write(`<ul>`)

    for(let i=0;i<array.length;i++){
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)

}


arrayList([1,2,3,4,true,false,false,true,'hey'])


//
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let objectBuilder= (array)=>{
    for(let item of array){
        document.write(`
        
        <div style="width:200px; height: 200px; background-color: #a3bbea;border: 1px gray solid;text-align: center">
        ${item.id} ${item.name} ${item.age} 
        
</div>
        `)
    }
}


let usersArray = [
    {id:1,name:"Viktor",age:22},
    {id:2,name:"Karina",age:22},
    {id:3,name:"Ivan",age:22}
]

objectBuilder(usersArray)

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


let arrayMin= (array)=>{
    let min=array[0];
    for(let i=1;i<array.length;i++){

        if(array[i]<min){
            min=array[i]
        }
    }
    return min
}

let arr = [88,3,5,6,101,23,12]

let min = arrayMin(arr)
console.log(min)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumArr=(array) =>{
    let sum=0;
    for(let element of array){
        sum+=element
    }
    return sum
}


let sum = sumArr(arr)
console.log(sum)
//
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap =(arr, indx1, indx2)=>{
    let temp=arr[indx1];        
     arr[indx1]=arr[indx2];
     arr[indx2]=temp
    return arr
}

let swapArr=[1,2,3,4,5]

console.log(swap(swapArr,0,4));
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (let element of currencyValues){
        if(element.currency===exchangeCurrency){
            return sumUAH/element.value
        }
    }
    return 0
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

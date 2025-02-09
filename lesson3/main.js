// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


for(let i=0;i<10;i++){
    document.write(`<div>Hello World!</div>`)
}

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for(let i=0;i<10;i++){
    document.write(`<div>Hello World! ${i}</div>`)
}
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;

while(i<20){
    document.write(`<h1>This is while loop</h1>`);
    i++
}

//#OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let k=0;

while(k<20){
    document.write(`<h1>This is while loop index ${k}</h1>`);
    k++
}

// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)

for(let item of listOfItems){
    document.write(`<li>
     ${item}
</li>`)
}

document.write(`</ul>`)


//
//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту



for(let product of products){

        document.write(`<div class="product-card">
                   <h3 class="product-title"> ${product.title} Price - ${product.price}</h3>
                   <img src="${product.image}"  class="product-image" alt="image">
                   
</div>`)

}



// #4WrHwFTEop0
// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


for(let user of users){
    if(user.status){
        console.log(`Name: ${user.name}, status:${user.status}`)
    }

}

console.log('  ')
for(let user of users){
    if(!user.status){
        console.log(`Name: ${user.name}, status:${user.status}`)
    }

}




 console.log('  ')
for(let user of users){
    if(user.age>30){
        console.log(`Name: ${user.name}, age:${user.age}`)
    }

}
////////////////////////////////////////////////////////////////////// ADDITIONAL

// #WpkK0ZH1
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


let numArray =[1,2,3,4,5]
let stringArr= ['hello','how','are','you','today']
let MultipleArray= [1,2,3,4,5,'hello','how','are','you','today',true, false,true,false, true]
let emptyArr=[];

emptyArr[0]=1;
emptyArr[1]=2;
emptyArr[2]=3;
emptyArr[3]=4
emptyArr[4]=5

console.log(`That was empty array:${emptyArr}`)



console.log(numArray);
console.log(stringArr);
console.log(MultipleArray);

//
//
//
// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)




let array = [2,17,13,6,22,31,45,66,100,-18];

let ind=0;

while( ind <array.length){

    console.log(array[ind], ind)
    ind++;



}
console.log(' ');

for(let i=0;i<array.length;i++){
    console.log(array[i]);

}

ind=0;

console.log(' ')

while( ind <array.length){

    if(ind%2===1){
        console.log(array[ind])

    }
    ind++;

}
console.log(' ')

ind =0;

while( ind <array.length){

    if(ind%2===0){
        console.log(array[ind])

    }
    ind++;
    console.log(' ')

}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

   for(let i=0; i<array.length;i++){
       if(i % 2 ===1){
           console.log(`Odd index numbers: ${array[i]}`)

       }
   }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

ind=0;
   while(ind<array.length){
       if(array[ind]%2===0) {
           console.log(`Even numbers:${array[ind]}`)
       }
       ind++
   }



// 6. перебрати циклом for та вивести  числа тільки парні  значення

for(let i=0; i<array.length;i++){
    if(array[i]%2===0){
        console.log(`Even numbers using for loop:${array[i]}`)
    }
}

// / 7. замінити кожне число кратне 3 на слово "okten"
// console.log(` `)
//
// for(let i =0; i<array.length; i++){
//     if(array[i]%3===0){
//         array[i]='okten'
//     }
// }
// console.log(array)

// вивести масив в зворотньому порядку.

for(let i=array.length-1; i>=0;i--){
    console.log(array[i])
}
// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

console.log('--REVERSED--')
// 1. перебрати його циклом while
// 2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"

ind=array.length-1;
while( ind >=0){

    console.log(array[ind], ind)
    ind--;}

console.log(' ')

for(let i=array.length-1; i>=0; i--){
    console.log(array[i], i)
}


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log(' ')
ind=array.length-1;

while(ind>=0){
    if(ind%2===1){
        console.log(array[ind], ind)
    }
    ind--
}
console.log(' ')
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for(let i=array.length-1; i>=0; i--){
    if(i%2===1){
        console.log(array[i],i)
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

console.log(' ')
 ind= array.length-1;

while(ind>=0){
    if(array[ind]%2===0){
        console.log(array[ind],ind)
    }
    ind--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log(' ')

for(let i=array.length-1; i>=0;i--){
    if(array[i]%2===0){
        console.log(array[i], i)
    }
}

console.log(' ')


// 7. замінити кожне число кратне 3 на слово "okten"
for(let i=array.length-1;i>=0;i--){
    if(array[i]%3===0){
        array[i]='okten'
    }

    console.log(array[i],i)
}





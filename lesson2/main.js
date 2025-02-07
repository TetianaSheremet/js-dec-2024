// // #67kfznmiMl
//
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let arr= [1,2,3,4,5,6,7,'hello','bye','how are you?']
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1={
    title:'Harry Potter',
    pageCount:345,
    genre:'fiction'
}
let book2={
    title:'Green mile',
    pageCount:280,
    genre:'fantasy'
}
let book3={
    title:'Sapiens',
    pageCount:500,
    genre:'biography'
}

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4={
    title:'Harry Potter',
    pageCount:345,
    genre:'fiction',
    authors:[{
        name:'Joan Roaling',
        age:59
    },
        {
            name:"someone",
            age:50

    }
    ]
}

let book5={
    title:'Green mile',
    pageCount:280,
    genre:'fantasy',

    authors:[
        {
            name:'Stephen King',
            age:77
        },

        {
            name:"someone else",
            age:55
        }
    ]
}

let book6={
    title:'Sapiens',
    pageCount:500,
    genre:'biography',

    authors:[
        {
            name:'Yuval harari',
            age:48
        },

        {
            name:"someone else",
            age:54
        }
    ]

}



// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users =[
    {
        name:'Ira',
        username:'Ira0202',
        password:12345678
    },
    {
        name:'Vika',
        username:'Vikk',
        password:'xx45675vk'
    },
    {
        name:'Vasya',
        username:'Vasya98',
        password:'va843984v'
    },
    {
        name:'Tanya',
        username:'Tati',
        password:'ttt638637'
    },
    {
        name:'Natalia',
        username:'Nata',
        password:'na8547854'
    },
    {
        name:'Viktor',
        username:'Viktor89',
        password:'vvv2362739'
    },
    {
        name:'Margo',
        username:'Margo12',
        password:'mm@rg0'
    },
    {
        name:'Marta',
        username:'Mmartta',
        password:'125152mm@rta'
    },
    {
        name:'Michael',
        username:'Michael2001',
        password:'mm3267362m@'
    },
    {
        name:'Igor',
        username:'Igor20',
        password:'igg000r@@'
    },
]


console.log(users[0]['password'])

console.log(users[1]['password'])

console.log(users[2]['password'])

console.log(users[3]['password'])

console.log(users[4]['password'])

console.log(users[5]['password'])

console.log(users[6]['password'])
console.log(users[7]['password'])
console.log(users[8]['password'])
console.log(users[9]['password'])

//
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatures = [
    {day:'Monday',morning:23, dayT:30, evening:25},
    {day:'Tuesday',morning:25, dayT:33, evening:27},
    {day:'Wednesday',morning:24, dayT:32, evening:25},
    {day:'Thursday',morning:21, dayT:29, evening:27},
    {day:'Friday',morning:22, dayT:32, evening:22},
    {day:'Saturday',morning:23, dayT:29, evening:24},
    {day:'Sunday',morning:21, dayT:31, evening:25}

]


//
// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=1


if(x===0){
    console.log('вірно')
}
else{
    console.log('невірно')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = -5;

if(time>=0 && time<=15){
    console.log("Перша четверть")
}
else if(time > 15 && time <=30){
    console.log("Друга четверть")
}
else if(time > 30 && time <=45){
    console.log("Третя четверть")
}
else if(time >45  && time <=59){
    console.log("Четверта четверть")
}
else{
    console.log("Ви ввели невірне значення")
}
//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=12
if(day>=1 && day <=10){
    console.log("Перша декада")
}
else if(day>10 && day <=20){
    console.log("Друга декада")
}
else if(day>20 && day <=31){
    console.log("Третя декада")
}
else{
    console.log("Ви ввели не вірне значення")
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let dayNumber = +prompt('Введіть порядковий день тижня:')

switch(dayNumber){
    case 1 : console.log('Monday');
    break;
    case 2 : console.log('Tuesday');
        break;
    case 3 : console.log('Wednesday');
        break;
    case 4 : console.log('Thursday');
        break;
    case 5 : console.log('Friday');
        break;

    case 6: console.log('Saturday');
        break;
    case 7: console.log('Sunday');
        break;

    default:
        console.log('Введіть правильне значення')


}

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let firstNumber= +prompt('Enter first number:');
let secondNumber=+prompt('Enter second number:');

if(firstNumber>secondNumber){
    console.log(`${firstNumber} найбільше число`);
}
else if(firstNumber<secondNumber){
    console.log(`${secondNumber} найбільше число`);
}
else{
    console.log("Числа однакові")
}
//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//

let x1 = 0

//
// if(x1===0 || x1===undefined || x1===null || x1 ===' ' || x1 === NaN){
//     x1='default'
//
//     console.log(x1);
// }

if(!x1){
    x1='default';
    console.log(x1)
}

//
// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер')
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер')
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер')
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер')
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер')
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер')
}
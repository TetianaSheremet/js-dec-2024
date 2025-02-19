// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


let a = 'hello world';
let b =  'lorem ipsum';
let c = 'javascript is cool'

console.log(a.length)
console.log(b.length);
console.log(c.length);
//
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());
//
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '

console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToarray=(str)=>{

    if(str){
        return str.split(' ');
    }
    return ['']

}


let str1 = 'Ревуть воли як ясла повні';

let arr = stringToarray(str1);
console.log(arr);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numArray = [10,8,-7,55,987,-1011,0,1050,0];


let stringArr= numArray.map(value => value.toString())
console.log(stringArr)

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];

let sortNums =(array, direction)=>{
    if(direction==='ascending'){
      return   array.sort((a,b) => a-b)
    }

    else if(direction==='descending' ){
     return   array.sort((a,b) => b-a)
    }

    else{
        return 0
    }

}


let sorted = sortNums(nums, 'ascending')
console.log(sorted)

// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let sortedCourses = coursesAndDurationArray.sort((a,b)=>{return b.monthDuration-a.monthDuration})

console.log(sortedCourses)


let filtered = coursesAndDurationArray.filter(value => value.monthDuration>5)

console.log(filtered)
console.log(coursesAndDurationArray)
//Sort міняє початковий масив

let mapped = coursesAndDurationArray.map((value, index) => {

    return {
        id: index,
        title: value.title,
        monthDuration: value.monthDuration

    }
}
)

console.log(mapped)

// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let suits = ['spade','club','diamond','heart'];
let values = [ '6','7','8','9','10','jack','queen', 'king', 'ace']

let deck=[];


for(let suit of suits){
    for(let value of values){
        let card= {cardSuit:suit, value:value}

        if(suit=== 'spade' || suit==='club'){
            card.color='black'
        }
        else{
            card.color='red'
        }
        deck.push(card)
    }
}


console.log(deck);

console.log(deck.filter(value => value.value==='6'))


console.log(deck.find(value => value.cardSuit==='spade'&& value.value==='ace'))
console.log(deck.filter(value => value.color==='red'))
console.log(deck.filter(value => value.cardSuit==='diamond'))
console.log(deck.filter(value => value.cardSuit==='club' && value.value!=='6' && value.value!=='7' && value.value!=='8'))




//
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let reduce = deck.reduce((accumulator,card)=>{

    if(card.cardSuit==='spade'){
        accumulator.spades.push(card)
    }
    else if(card.cardSuit==='diamond'){
        accumulator.diamonds.push(card)
    }
    else if(card.cardSuit==='heart'){
        accumulator.hearts.push(card)
    }
    else accumulator.clubs.push(card)

    return accumulator

}, {
   spades:[], diamonds:[],
    hearts:[],  clubs:[]
}
)

console.log(reduce)


// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];



let sass= coursesArray.filter(course => {
  return  course.modules.includes('sass')
} )

console.log(sass)

let docker = coursesArray.filter(course => {
    return  course.modules.includes('docker')
} )

console.log(docker)
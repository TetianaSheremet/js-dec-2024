

// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".



let button= document.getElementById('button')
let divText= document.getElementById('text')

// button.onclick=function (){
// divText.style.display="none"
// }


button.addEventListener('click',function(){
    divText.style.display="none"
})


//
// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача



let input=document.getElementById('userAge')

let submitButton=document.getElementById('submit')
let displayDiv= document.getElementsByClassName('display')[0];


submitButton.onclick = function(){

    let age= Number(input.value)
    if(age>=18){
        displayDiv.innerText = `You are an adult`
    }

    else if(age<18){
        displayDiv.innerText = `You are an child`
    }

    else{
        displayDiv.innerText = `Enter valid data`
    }



}











//
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
//



let name= document.getElementById('name')
let age= document.getElementById('age')
let surname= document.getElementById('surname')

let formSubmit= document.getElementById('formSubmit'
)


formSubmit.onclick=function (){
    let div=document.createElement('div')

    div.style.width='200px'
    div.style.height='100px';
    div.style.backgroundColor='yellow'
    div.innerText=`Name:${name.value} Surname:${surname.value} Age:${age.value}`
document.body.appendChild(div)
}




//
//
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//



let digit = +localStorage.getItem('number') || 0;

digit += 1;

localStorage.setItem('number', digit);


let storageDiv= document.getElementById('storage')

storageDiv.innerText= digit


//
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
//
//



let currentTime= JSON.parse(localStorage.getItem('currentDate')) || [];


currentTime.push(new Date())

localStorage.setItem('currentDate',JSON.stringify(currentTime))
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// 1 фунт це 2.2кг


let kiloInput=document.getElementById('kilograms')
let poundsDiv = document.getElementById('pounds')

kiloInput.oninput = function(){

    poundsDiv.innerText=(this.value*2.2).toFixed(2)
}



//
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
//

function addToLocalStorage(arrayName,objToAdd){

    let neededArray= JSON.parse(localStorage.getItem(arrayName))||[];

    neededArray.push(objToAdd );

    localStorage.setItem(`${arrayName}`,JSON.stringify(neededArray))

}

addToLocalStorage('array',{name:'Ivan',age:55})


//
// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


let form= document.forms[0];



form.onsubmit= function(e){
    e.preventDefault()


    let table= document.getElementById('tableHolder')
    let rows = +form.rows.value
    let columns= +form.columns.value

    let data= form.data.value


    for(let i =0; i<rows;i++){
        let tr= document.createElement('tr')
        for(let j=0;j<columns;j++){
            let td= document.createElement('td')
            td.innerText=data;
            tr.appendChild(td)
        }

        table.appendChild(tr)
    }

}
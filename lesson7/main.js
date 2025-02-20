// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id,name,surname,email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone
}
let users =[]
let user1 = new User(1,'Vasya','Ivanov','vasya123@gmail.com','+380668687654')

let user2 = new User(2,'Kasya','Ivanova','kasya123@gmail.com','+380669087654')


let user3 = new User(3,'Ivan','Lapin','Ivan123@gmail.com','+380509087693')




let user4 = new User(4,'Petro','Lys','petya123@gmail.com','+380505077693')





let user5 = new User(5,'Oksana','Shevchenko','Oksana123@gmail.com','+380509899769')





let user6 = new User(6,'Sergiy','Lapin','Sergiy123@gmail.com','+380668087693')


let user7 = new User(7, 'Andriy', 'Bondarenko', 'andriy.bond@gmail.com', '+380632334455')





let user8 = new User(8, 'Natalia', 'Kovalenko', 'natalia.kov@gmail.com', '+380671234567')





let user9 = new User(9, 'Svitlana', 'Tkachenko', 'svitlana.@gmail.com', '+380931112233')





let user10 = new User(10, 'Oleksiy', 'Krivenko', 'oleksiy.k@gmail.com', '+380662223344')
users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(users)
//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


let evenUsers = users.filter(user => {
    return user.id%2===0
})
console.log(evenUsers)
    // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a,b) => a.id - b.id))
//
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//


function Client(id,name,surname,email,phone,order){

    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order=order

}


let client1 = new Client(1, 'Oleksiy', 'Krivenko', 'oleksiy.k@gmail.com', '+380662223344',['pears','butter','cherries','milk'])


let client2 = new Client(2,'Kasya','Ivanova','kasya123@gmail.com','+380669087654',['apples','bread','cherries'])


let client3 = new Client(3,'Ivan','Lapin','Ivan123@gmail.com','+380509087693',['apples','butter','cherries'])




let client4 = new Client(4,'Petro','Lys','petya123@gmail.com','+380505077693',['apples','milk'])





let client5 = new Client(5,'Oksana','Shevchenko','Oksana123@gmail.com','+380509899769',['apples'])





let client6 = new Client(6,'Sergiy','Lapin','Sergiy123@gmail.com','+380668087693',['apples','bread','cherries','orange','blueberries'])


let client7 = new Client(7, 'Andriy', 'Bondarenko', 'andriy.bond@gmail.com', '+380632334455',['apples','bread','cherries','milk'])





let client8 = new Client(8, 'Natalia', 'Kovalenko', 'natalia.kov@gmail.com', '+380671234567',['apples','bread'])





let client9 = new Client(9, 'Svitlana', 'Tkachenko', 'svitlana.@gmail.com', '+380931112233',['apples','bread','cherries','soda'])
let client10 = new Client(10,'Vasya','Ivanov','vasya123@gmail.com','+380668687654',['apples','bread','cherries','cola','beer','waffles'])

let clients=[];

clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)

console.log(clients)


// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//


let orderSorted = clients.sort((a,b)=> {
    return a.order.length - b.order.length
})

console.log(orderSorted)







//
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//


function Car(model, manufacturer, year, maxSpeed,engineVolume){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engineVolume=engineVolume;

    this.drive= function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function(){
       for(let key in this){
           console.log(key, this[key])
       }
    };
    this.increaseMaxSpeed = function (newSpeed){
       return this.maxSpeed += newSpeed
    };

    this.changeYear = function (newValue){
        this.year = newValue
    }

    this. addDriver = function (driver){

        this.driver=driver

    }
}


let car = new Car ('tesla','tesla','2010','230km/h','big')
console.log(car)

car.addDriver({name:"Ivan"})

car.drive()
//
// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
    constructor(model, manufacturer, year, maxSpeed,engineVolume){
        this.model=model;
        this.manufacturer=manufacturer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engineVolume=engineVolume;


    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info (){
        for(let key in this){
            console.log(key, this[key])
        }
    };
    increaseMaxSpeed (newSpeed){
        return this.maxSpeed += newSpeed
    };

    changeYear (newValue){
        this.year = newValue
    }

    addDriver  (driver){

        this.driver=driver

    }
}
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



class Cinderella {
    constructor(name, age, footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize
    }
}

let cinderellas= [
    new Cinderella('Alisa',25,37),
    new Cinderella('Sofia',26,38),
    new Cinderella('Viktoria',24,35),
    new Cinderella('Anna',27,36),
    new Cinderella('Elsa',27,37),
    new Cinderella('Aurora',25,38),
    new Cinderella('Moana',23,39),
    new Cinderella('Barbie',26,35),
    new Cinderella('Ariel',24,37),
    new Cinderella('Rachel',25,36),

]


console.log(cinderellas);

class Prince {
    constructor(name,age,shoe) {
        this.name=name;
        this.age=age;
        this.shoe=shoe


    }


}

let prince = new Prince('Eric', 25,39)


for(let cinderella of cinderellas){

    if(prince.shoe===cinderella.footSize){
        console.log(`We found Cinderella, it is: ${cinderella.name}`)
    }
}


let cinderella =  cinderellas.find(cinderella => cinderella.footSize===prince.shoe)

console.log(cinderella)

//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

let arr = [1,2,3,4,5,6,7,8,9]

Array.prototype.myForEach = function(callback){

    let theArray = this
    for (const item of theArray) {

        callback(item);

    }
}


arr.myForEach(value => console.log(value))



Array.prototype.myFilter = function (condition) {
    const arr = []

    for (const item of this) {

        if (condition(item)){
            arr.push(item)
        }

    }


    return arr


}

let arrExample = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


let filtered = arrExample.myFilter(item => item>=10)

console.log(filtered)
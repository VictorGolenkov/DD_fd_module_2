/** Вариант 1 */
/** Part 1 - START **/
/** Одномерные массивы */
let data = [-64, 123, 32, 0, -32, 0, 16, 0, -16, 0, 8, 0, -8, 0, 4, 0, -4, 0, 2, 0, -2, 0, 1, 0, -1, 234];
console.log(data);
function max(data) {
    let max = data[0];
    for (let i = 0; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}
const preparedData = max(data);
console.log(preparedData);
/** Двумерные массивы */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
console.log(matrix);
const isNegativeIn = (matrix) => {
    for (let row of matrix) {
        for (let element of row) {
            if (element < 0) {
                return true;
            }
        }
    }
    return false;
};
const preparedMatrix = isNegativeIn(matrix);
console.log(preparedMatrix);
/** Part 1 - END **/
/** Part 2 - START **/
const tuple = [5, 3, 7];
const summTuple = (tuple) => {
    return tuple[0] + tuple[1] + tuple[2];
};
console.log(summTuple(tuple));
/** Part 2 - END **/
/** Part 3 - START **/
var SomeEnum;
(function (SomeEnum) {
    SomeEnum["BASKETBALL_BALL"] = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    SomeEnum["SOCCER_BALL"] = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    SomeEnum["VOLLEYBALL_BALL"] = "\u0412\u043E\u043B\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
})(SomeEnum || (SomeEnum = {}));
console.log(SomeEnum.SOCCER_BALL);
/** Part 3 - END **/
/** Part 4 - START **/
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "SuperAngryHunter9000";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
        ;
    }
}
function printPetInfo(pet) {
    console.log("Name: " + pet.name);
    console.log("Age: " + pet.age);
    console.log("Speak: " + pet.speak());
    if (pet instanceof Dog) {
        console.log("Label: " + pet.label);
    }
}
let myPet = new Pet();
const myDog = new Dog();
const myCat = new Cat();
printPetInfo(myPet);
printPetInfo(myDog);
printPetInfo(myCat);
const obj1 = {
    ManufacturerName: "Torres",
    NumberOfGames: 5,
    GameType: SomeEnum.BASKETBALL_BALL,
    Condition: 'GREAT'
};
const jsonObject = JSON.stringify(obj1);
console.log(jsonObject);
const objParsed = JSON.parse(jsonObject);
let partObject = objParsed.GameType;
console.log(objParsed);
/** Part 5 - END **/ 

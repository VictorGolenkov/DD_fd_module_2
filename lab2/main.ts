/** Вариант 1 */
/** Part 1 - START **/

/** Одномерные массивы */
let data: number[] = [-64, 123, 32, 0, -32, 0, 16, 0, -16, 0, 8, 0, -8, 0, 4, 0, -4, 0, 2, 0, -2, 0, 1, 0, -1, 234];

console.log(data);

function max(data: number[]): number {
    let max: number = data[0];
    for (let i = 0; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}

const preparedData: number = max(data);
console.log(preparedData);

/** Двумерные массивы */

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

console.log(matrix);

const isNegativeIn = (matrix: number[][]) => {
    for (let row of matrix) {
        for (let element of row) {
            if (element < 0) {
                return true;
            }
        }
    }
    return false;
}

const preparedMatrix: boolean = isNegativeIn(matrix);
console.log(preparedMatrix);

/** Part 1 - END **/

/** Part 2 - START **/

const tuple: [number, number, number] = [5, 3, 7];

const summTuple = (tuple: [number, number, number]) => {
    return tuple[0] + tuple[1] + tuple[2];
}

console.log(summTuple(tuple));

/** Part 2 - END **/

/** Part 3 - START **/

enum SomeEnum {
    BASKETBALL_BALL = 'Баскетбольный мяч',
    SOCCER_BALL = 'Футбольный мяч',
    VOLLEYBALL_BALL = 'Воллейбольный мяч',
}

console.log(SomeEnum.SOCCER_BALL);

/** Part 3 - END **/

/** Part 4 - START **/
class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "SuperAngryHunter9000";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";;
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log("Name: " + pet.name);
    console.log("Age: " + pet.age);
    console.log("Speak: " + pet.speak());
    
    if (pet instanceof Dog) {
        console.log("Label: " + (pet as Dog).label);
    }
}

let myPet = new Pet();
const myDog = new Dog();
const myCat = new Cat();

printPetInfo(myPet);
printPetInfo(myDog);
printPetInfo(myCat);

/** Part 4 - END **/

/** Part 5 - START **/

interface Ball {
    ManufacturerName: string;
    NumberOfGames: number;
    GameType: SomeEnum;
    Condition: 'GREAT' | 'GOOD' | 'WORN-OUT' | 'BAD AT ALL';
}

const obj1: Ball = {
    ManufacturerName: "Torres",
    NumberOfGames: 5,
    GameType: SomeEnum.BASKETBALL_BALL,
    Condition: 'GREAT'
}

const jsonObject = JSON.stringify(obj1);
console.log(jsonObject);

const objParsed: Ball = JSON.parse(jsonObject) as Ball;

let partObject: SomeEnum = objParsed.GameType;

console.log(objParsed);


/** Part 5 - END **/
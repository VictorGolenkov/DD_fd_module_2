/** Вариант 1 */
/** Part 1 - START **/
/** Одномерные массивы */
declare let data: number[];
declare function max(data: number[]): number;
declare const preparedData: number;
/** Двумерные массивы */
declare let matrix: number[][];
declare const isNegativeIn: (matrix: number[][]) => boolean;
declare const preparedMatrix: boolean;
/** Part 1 - END **/
/** Part 2 - START **/
declare const tuple: [number, number, number];
declare const summTuple: (tuple: [number, number, number]) => number;
/** Part 2 - END **/
/** Part 3 - START **/
declare enum SomeEnum {
    BASKETBALL_BALL = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447",
    SOCCER_BALL = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447",
    VOLLEYBALL_BALL = "\u0412\u043E\u043B\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447"
}
/** Part 3 - END **/
/** Part 4 - START **/
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printPetInfo<T extends Pet>(pet: T): void;
declare let myPet: Pet;
declare const myDog: Dog;
declare const myCat: Cat;
/** Part 4 - END **/
/** Part 5 - START **/
interface Ball {
    ManufacturerName: string;
    NumberOfGames: number;
    GameType: SomeEnum;
    Condition: 'GREAT' | 'GOOD' | 'WORN-OUT' | 'BAD AT ALL';
}
declare const obj1: Ball;
declare const jsonObject: string;
declare const objParsed: Ball;
declare let partObject: SomeEnum;
/** Part 5 - END **/ 

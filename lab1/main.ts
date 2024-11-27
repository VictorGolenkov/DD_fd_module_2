/** Вариант 1 */

/** Part 2 - START **/
function someSimpleFunc(p1: string, p2: string) {
    return p1 + p2;
}

let someArrowFunc = (p1: string, p2: string) => {
    return p1 + p2;
};

const resSimpleFunc: string = someSimpleFunc('12','34');
const resArrowFunc: string = someArrowFunc('56', '78');

console.log(resSimpleFunc);
console.log(resArrowFunc);

/** Part 2 - END **/

/** Part 3 - START **/
let a: number = 234;
const b: string = "some_string";
const c: any = ['Весна','Лето','Осень','Зима'];
let d = Symbol("d");
let i: boolean = true;
const allData: any = [a, b, c, d, i];
console.log(allData);

/** Part 3 - END **/

/** Part 4 - START **/
interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}

const data: ToJsonStringify = {
    id: 1,
    name: 'Василий',
}

const jsonStringify: string = JSON.stringify(data);

console.log(jsonStringify);

/** Part 4 - END **/

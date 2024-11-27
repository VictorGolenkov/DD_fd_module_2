/** Вариант 1 */
/** Part 2 - START **/
function someSimpleFunc(p1, p2) {
    return p1 + p2;
}
let someArrowFunc = (p1, p2) => {
    return p1 + p2;
};
const resSimpleFunc = someSimpleFunc('12', '34');
const resArrowFunc = someArrowFunc('56', '78');
console.log(resSimpleFunc);
console.log(resArrowFunc);
/** Part 2 - END **/
/** Part 3 - START **/
let a = 234;
const b = "some_string";
const c = ['Весна', 'Лето', 'Осень', 'Зима'];
let d = Symbol("d");
let i = true;
const allData = [a, b, c, d, i];
console.log(allData);
const data = {
    id: 1,
    name: 'Василий',
};
const jsonStringify = JSON.stringify(data);
console.log(jsonStringify);
/** Part 4 - END **/

/** Вариант 1 */
/** Part 2 - START **/
declare function someSimpleFunc(p1: string, p2: string): string;
declare let someArrowFunc: (p1: string, p2: string) => string;
declare const resSimpleFunc: string;
declare const resArrowFunc: string;
/** Part 2 - END **/
/** Part 3 - START **/
declare let a: number;
declare const b: string;
declare const c: any;
declare let d: symbol;
declare let i: boolean;
declare const allData: any;
/** Part 3 - END **/
/** Part 4 - START **/
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const data: ToJsonStringify;
declare const jsonStringify: string;
/** Part 4 - END **/

import { Transport } from "./module.js";
var Owner = Transport.Owner;
var Car = Transport.Car;
var MyDocumentType = Transport.MyDocumentType;
var BodyType = Transport.BodyType;
var CarClass = Transport.CarClass;
const owner = new Owner("Иванов", "Иван", "Иванович", new Date(1985, 5, 15), // 15 июня 1985
MyDocumentType.Passport, "0000", "123456");
owner.displayInfo();
const car = new Car("Toyota21", "Camry312", 2020, "1HGBH41JXMN109186", "A123BC", owner, BodyType.COUPE, CarClass.PREMIUM);
car.displayInfo();
console.log(car.show());
Object.defineProperty(Car, 'age', { value: 17 }); //Произойдет ошибка!!!
//console.log(Car.age);

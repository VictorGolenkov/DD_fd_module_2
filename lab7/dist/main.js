//Вариант 1
import { Transport } from "./module.js";
var Owner = Transport.Owner;
var Vehicle = Transport.Vehicle;
var Car = Transport.Car;
var Motorbike = Transport.Motorbike;
var MyDocumentType = Transport.MyDocumentType;
var BodyType = Transport.BodyType;
var CarClass = Transport.CarClass;
var VehicleStorage = Transport.VehicleStorage;
const owner1 = new Owner("Александр", "Александрович", "Александров", new Date(1985, 5, 15), // 15 июня 1985
MyDocumentType.Passport, "0000", "123456");
const owner2 = new Owner("Иван", "Иванович", "Иванов", new Date(1985, 5, 15), // 15 июня 1985
MyDocumentType.Passport, "0000", "123456");
const owner3 = new Owner("Пётр", "Петрович", "Петров", new Date(1985, 5, 15), // 15 июня 1985
MyDocumentType.Passport, "0000", "123456");
owner1.displayInfo();
owner2.displayInfo();
owner3.displayInfo();
const vehicle = new Vehicle("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner1);
//vehicle.displayInfo();
const car = new Car("Toyota21", "Camry312", 2020, "1HGBH41JXMN109186", "A123BC", owner2, BodyType.COUPE, CarClass.PREMIUM);
//car.displayInfo();
const motorbike = new Motorbike('Yamaha', 'YZF-R1', 2020, "1HGBH41JXMN109186", "A123BC", owner2, 'Спортивная', true);
//motorbike.displayInfo();
let storage = new VehicleStorage;
storage.save(vehicle);
storage.save(car);
storage.save(motorbike);
storage.save(new Car('Honda', 'Accord', 2019, "1HGBH41JXMN109186", "A123BC", owner3, BodyType.SEDAN, CarClass.ECONOMY));
console.log("\nЗадание 1");
console.log("Изначальный массив:");
const allCars = storage.getAll();
allCars.forEach(car => car.displayInfo());
let sortedArray = storage.sortByBrand();
console.log("Сортированный массив:");
console.log(sortedArray);
console.log("\nЗадание 2");
console.log(storage.filterByOwners("Иванов"));
console.log("\nЗадание 3");
console.log(storage.getSomeInfo());

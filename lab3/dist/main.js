var MyDocumentType;
(function (MyDocumentType) {
    MyDocumentType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    MyDocumentType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430";
    MyDocumentType["Birth\u0421ertificate"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
})(MyDocumentType || (MyDocumentType = {}));
class Owner {
    constructor(firstName, middleName, lastName, dateOfBirth, documentType, documentSeries, documentNumber) {
        this._firstName = firstName;
        this._middleName = middleName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    displayInfo() {
        console.log(`Владелец:
            Фамилия: ${this._lastName}
            Имя: ${this._firstName}
            Отчество: ${this._middleName}
            Дата рождения: ${this._dateOfBirth.toLocaleDateString()}
            Тип документа: ${this._documentType}
            Серия документа: ${this._documentSeries}
            Номер документа: ${this._documentNumber}`);
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(arg) {
        this._firstName = arg;
    }
    get middleName() {
        return this._middleName;
    }
    set middleName(arg) {
        this._middleName = arg;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(arg) {
        this._lastName = arg;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(arg) {
        this._dateOfBirth = arg;
    }
    get documentType() {
        return this._documentType;
    }
    set documentType(arg) {
        this._documentType = arg;
    }
    get documentSeries() {
        return this._documentSeries;
    }
    set documentSeries(arg) {
        this._documentSeries = arg;
    }
    get documentNumber() {
        return this._documentNumber;
    }
    set documentNumber(arg) {
        this._documentNumber = arg;
    }
}
const owner = new Owner("Иванов", "Иван", "Иванович", new Date(1985, 5, 15), // 15 июня 1985
MyDocumentType.Passport, "0000", "123456");
// console.log(owner.documentNumber);
// owner.documentNumber = "654321";
// console.log(owner.documentNumber);
owner.displayInfo();
class Vehicle {
    constructor(brand, model, yearOfManufacture, vin, registrationNumber, owner) {
        this._brand = brand;
        this._model = model;
        this._yearOfManufacture = yearOfManufacture;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    displayInfo() {
        console.log(`
            Марка: ${this._brand}
            Модель: ${this._model}
            Год выпуска: ${this._yearOfManufacture}
            VIN-номер: ${this._vin}
            Регистрационный номер: ${this._registrationNumber}
            Сведения о владельце: ${this._owner}`);
    }
    get brand() {
        return this._brand;
    }
    set brand(arg) {
        this._brand = arg;
    }
    get model() {
        return this._model;
    }
    set model(arg) {
        this._model = arg;
    }
    get yearOfManufacture() {
        return this._yearOfManufacture;
    }
    set yearOfManufacture(arg) {
        this._yearOfManufacture = arg;
    }
    get vin() {
        return this._vin;
    }
    set vin(arg) {
        this._vin = arg;
    }
    get registrationNumber() {
        return this._registrationNumber;
    }
    set registrationNumber(arg) {
        this._registrationNumber = arg;
    }
    get owner() {
        return this._owner;
    }
    set owner(arg) {
        this._owner = arg;
    }
}
const vehicle = new Vehicle("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner);
vehicle.displayInfo();
var BodyType;
(function (BodyType) {
    BodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["COUPE"] = "\u041A\u0443\u043F\u0435";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["ECONOMY"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["BUSINESS"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["PREMIUM"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
})(CarClass || (CarClass = {}));
class Car extends Vehicle {
    constructor(brand, model, yearOfManufacture, vin, registrationNumber, owner, bodyType, carClass) {
        super(brand, model, yearOfManufacture, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`
            Кузов: ${this._bodyType}
            Класс: ${this._carClass}
            `);
    }
    get bodyType() {
        return this._bodyType;
    }
    set bodyType(arg) {
        this._bodyType = arg;
    }
    get carClass() {
        return this._carClass;
    }
    set carClass(arg) {
        this._carClass = arg;
    }
}
const car = new Car("Toyota21", "Camry312", 2020, "1HGBH41JXMN109186", "A123BC", owner, BodyType.COUPE, CarClass.PREMIUM);
car.displayInfo();
class Motorbike extends Vehicle {
    constructor(brand, model, yearOfManufacture, vin, registrationNumber, owner, frameType, sSport) {
        super(brand, model, yearOfManufacture, vin, registrationNumber, owner);
        this._frameType = frameType;
        this._isSport = sSport;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`
            Кузов: ${this._frameType}
            Класс: ${this._isSport}
            `);
    }
    get frameType() {
        return this._frameType;
    }
    set frameType(arg) {
        this._frameType = arg;
    }
    get isSport() {
        return this._isSport;
    }
    set isSport(arg) {
        this._isSport = arg;
    }
}
const motorbike = new Motorbike('Yamaha', 'YZF-R1', 2020, "1HGBH41JXMN109186", "A123BC", owner, 'Спортивная', true);
motorbike.displayInfo();
class VehicleStorage {
    get created() {
        return this._created;
    }
    get data() {
        return this._data;
    }
    constructor() {
        this._created = new Date();
        this._data = [];
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this._data = this.data.splice(index, 1);
    }
    save(data) {
        this._data.push(data);
    }
}
// let storage = new VehicleStorage<Vehicle>;
// storage.save(vehicle);
// storage.save(car);
// storage.save(motorbike);
let storage = new VehicleStorage;
storage.save(car);
storage.save(new Car('Honda', 'Accord', 2019, "1HGBH41JXMN109186", "A123BC", owner, BodyType.SEDAN, CarClass.ECONOMY));
const allCars = storage.getAll();
allCars.forEach(car => car.displayInfo());

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export var Transport;
(function (Transport) {
    function sealed(constructor) {
        console.log("sealed decorator");
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
    function UppercaseDecorator(target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const result = originalMethod.apply(this, args);
            return typeof result === 'string' ? result.toUpperCase() : result;
        };
        return descriptor;
    }
    let MyDocumentType;
    (function (MyDocumentType) {
        MyDocumentType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        MyDocumentType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430";
        MyDocumentType["Birth\u0421ertificate"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
    })(MyDocumentType = Transport.MyDocumentType || (Transport.MyDocumentType = {}));
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
    Transport.Owner = Owner;
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
    Transport.Vehicle = Vehicle;
    let BodyType;
    (function (BodyType) {
        BodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        BodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        BodyType["COUPE"] = "\u041A\u0443\u043F\u0435";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["ECONOMY"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["BUSINESS"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClass["PREMIUM"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    let Car = class Car extends Vehicle {
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
        show() {
            return `Автомобиль: ${this.bodyType} ${this.carClass}`;
        }
    };
    __decorate([
        UppercaseDecorator
    ], Car.prototype, "show", null);
    Car = __decorate([
        sealed
    ], Car);
    Transport.Car = Car;
})(Transport || (Transport = {}));

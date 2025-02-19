export namespace Transport {

    function sealed(constructor: Function) {
        console.log("sealed decorator");
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }

    function UppercaseDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            return typeof result === 'string' ? result.toUpperCase() : result;
        };
        return descriptor;
    }

    export enum MyDocumentType {
        Passport = "Паспорт",
        DriverLicense = "Водительские права",
        BirthСertificate = "Свидетельство о рождении",
    }

    export interface IOwner {
        firstName: string;
        middleName: string;
        lastName: string;
        dateOfBirth: Date;
        documentType: MyDocumentType;
        documentSeries: string;
        documentNumber: string;
        displayInfo(): void;
    }

    export class Owner implements IOwner {
        private _firstName: string;
        private _middleName: string;
        private _lastName: string;
        private _dateOfBirth: Date;
        private _documentType: MyDocumentType;
        private _documentSeries: string;
        private _documentNumber: string;

        constructor(
            firstName: string,
            middleName: string,
            lastName: string,
            dateOfBirth: Date,
            documentType: MyDocumentType,
            documentSeries: string,
            documentNumber: string
        ) {
            this._firstName = firstName;
            this._middleName = middleName;
            this._lastName = lastName;
            this._dateOfBirth = dateOfBirth;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }

        displayInfo(): void {
            console.log(`Владелец:
            Фамилия: ${this._lastName}
            Имя: ${this._firstName}
            Отчество: ${this._middleName}
            Дата рождения: ${this._dateOfBirth.toLocaleDateString()}
            Тип документа: ${this._documentType}
            Серия документа: ${this._documentSeries}
            Номер документа: ${this._documentNumber}`);
        }

        get firstName(): string {
            return this._firstName;
        }
        set firstName(arg: string) {
            this._firstName = arg;
        }

        get middleName(): string {
            return this._middleName;
        }
        set middleName(arg: string) {
            this._middleName = arg;
        }

        get lastName(): string {
            return this._lastName;
        }
        set lastName(arg: string) {
            this._lastName = arg;
        }

        get dateOfBirth(): Date {
            return this._dateOfBirth;
        }
        set dateOfBirth(arg: Date) {
            this._dateOfBirth = arg;
        }

        get documentType(): MyDocumentType {
            return this._documentType;
        }
        set documentType(arg: MyDocumentType) {
            this._documentType = arg;
        }

        get documentSeries(): string {
            return this._documentSeries;
        }
        set documentSeries(arg: string) {
            this._documentSeries = arg;
        }

        get documentNumber(): string {
            return this._documentNumber;
        }
        set documentNumber(arg: string) {
            this._documentNumber = arg;
        }
    }

    export interface IVehicle {
        brand: string;
        model: string;
        yearOfManufacture: number;
        vin: string;
        registrationNumber: string;
        owner: IOwner;
        displayInfo(): void;
    }

    export class Vehicle implements IVehicle {
        private _brand: string;
        private _model: string;
        private _yearOfManufacture: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: IOwner;

        constructor(
            brand: string,
            model: string,
            yearOfManufacture: number,
            vin: string,
            registrationNumber: string,
            owner: IOwner
        ) {
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

        get brand(): string {
            return this._brand;
        }
        set brand(arg: string) {
            this._brand = arg;
        }

        get model(): string {
            return this._model;
        }
        set model(arg: string) {
            this._model = arg;
        }

        get yearOfManufacture(): number {
            return this._yearOfManufacture;
        }
        set yearOfManufacture(arg: number) {
            this._yearOfManufacture = arg;
        }

        get vin(): string {
            return this._vin;
        }
        set vin(arg: string) {
            this._vin = arg;
        }

        get registrationNumber(): string {
            return this._registrationNumber;
        }
        set registrationNumber(arg: string) {
            this._registrationNumber = arg;
        }

        get owner(): IOwner {
            return this._owner;
        }

        set owner(arg: IOwner) {
            this._owner = arg;
        }
    }

    export enum BodyType {
        SEDAN = 'Седан',
        SUV = 'Внедорожник',
        HATCHBACK = 'Хэтчбек',
        COUPE = 'Купе'
    }


    export enum CarClass {
        ECONOMY = 'Эконом',
        BUSINESS = 'Бизнес',
        PREMIUM = 'Премиум'
    }

    export interface ICar extends IVehicle {
        bodyType: BodyType;
        carClass: CarClass;
        displayInfo(): void;
    }

    @sealed
    export class Car extends Vehicle implements ICar {
        private _bodyType: BodyType;
        private _carClass: CarClass;

        constructor(
            brand: string,
            model: string,
            yearOfManufacture: number,
            vin: string,
            registrationNumber: string,
            owner: IOwner,
            bodyType: BodyType,
            carClass: CarClass
        ) {
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

        get bodyType(): BodyType {
            return this._bodyType;
        }

        set bodyType(arg: BodyType) {
            this._bodyType = arg;
        }

        get carClass(): CarClass {
            return this._carClass;
        }

        set carClass(arg: CarClass) {
            this._carClass = arg;
        }

        @UppercaseDecorator
        show() {
            return `Автомобиль: ${this.bodyType} ${this.carClass}`;
        }

    }

}


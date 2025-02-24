export namespace Transport {

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

    // const owner = new Owner(
    //     "Иванов",
    //     "Иван",
    //     "Иванович",
    //     new Date(1985, 5, 15), // 15 июня 1985
    //     MyDocumentType.Passport,
    //     "0000",
    //     "123456"
    // );

    // // console.log(owner.documentNumber);
    // // owner.documentNumber = "654321";
    // // console.log(owner.documentNumber);

    // owner.displayInfo();

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
            Сведения о владельце: ${this._owner.displayInfo()}`);
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

    // const vehicle = new Vehicle(
    //     "Toyota",
    //     "Camry",
    //     2020,
    //     "1HGBH41JXMN109186",
    //     "A123BC",
    //     owner
    // );

    // vehicle.displayInfo();

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

    }

    // const car = new Car(
    //     "Toyota21",
    //     "Camry312",
    //     2020,
    //     "1HGBH41JXMN109186",
    //     "A123BC",
    //     owner,
    //     BodyType.COUPE,
    //     CarClass.PREMIUM
    // );

    // car.displayInfo();

    export interface IMotorbike extends IVehicle {
        frameType: string;
        isSport: boolean;
        displayInfo(): void;
    }

    export class Motorbike extends Vehicle implements IMotorbike {
        private _frameType: string;
        private _isSport: boolean;

        constructor(
            brand: string,
            model: string,
            yearOfManufacture: number,
            vin: string,
            registrationNumber: string,
            owner: IOwner,
            frameType: string,
            sSport: boolean
        ) {
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

        get frameType(): string {
            return this._frameType;
        }

        set frameType(arg: string) {
            this._frameType = arg;
        }

        get isSport(): boolean {
            return this._isSport;
        }

        set isSport(arg: boolean) {
            this._isSport = arg;
        }

    }

    // const motorbike = new Motorbike(
    //     'Yamaha',
    //     'YZF-R1',
    //     2020,
    //     "1HGBH41JXMN109186",
    //     "A123BC",
    //     owner,
    //     'Спортивная',
    //     true
    // );

    // motorbike.displayInfo();

    function myQuickSort(arr: any):  any{
        if (arr.length < 2) return arr;
        let pivot = arr[0];
        const left = [];
        const right = [];
        for (let i = 1; i < arr.length; i++) {
        if (pivot.brand > arr[i].brand) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
        }
        return myQuickSort(left).concat(pivot, myQuickSort(right));
        }

    export interface IVehicleStorage<T extends IVehicle> {
        created: Date;
        data: T[];
        getAll: () => T[];
        sortByBrand: () => T[];
        filterByOwners: (lastName: string) => T[];
        getSomeInfo: () => string;
    }

    export class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
        private readonly _created: Date;
        private _data: T[];

        get created(): Date {
            return this._created;
        }

        get data(): T[] {
            return this._data;
        }

        constructor() {
            this._created = new Date();
            this._data = [];
        }

        getAll(): T[] {
            return this.data;
        }

        remove(index: number): void {
            this._data = this.data.splice(index, 1);
        }

        save(data: T): void {
            this._data.push(data);
        }

        sortByBrand(): T[] {
            return myQuickSort(this._data);     
        }

        filterByOwners(ownerLastName: string): T[] {
            const lowercasedLastName = ownerLastName.toLowerCase(); // Приводим к нижнему регистру
            
            let newArray: T[] = [];
            //let i = 0;

            for(let item of this._data) {
                if(item.owner.lastName.toLowerCase() == lowercasedLastName) {
                    newArray.push(item);
                    //i++;
                } 
                // else
                //     newArray.splice(i, 1);

            
            }
            return(newArray);
        }

        getSomeInfo(): string {
            return this._data.map(vehicle => `
                ${vehicle.vin}
                ${vehicle.owner.lastName} ${vehicle.owner.firstName} ${vehicle.owner.middleName}
                ${vehicle.registrationNumber} `).join('\n');
        }
    }
    // let storage = new VehicleStorage<Vehicle>;
    // storage.save(vehicle);
    // storage.save(car);
    // storage.save(motorbike);

    // let storage = new VehicleStorage<Car>;
    // storage.save(car);
    // storage.save(new Car('Honda', 'Accord', 2019, "1HGBH41JXMN109186", "A123BC", owner, BodyType.SEDAN, CarClass.ECONOMY));

    // const allCars = storage.getAll();

    // allCars.forEach(car => car.displayInfo());
}

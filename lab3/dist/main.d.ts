declare enum MyDocumentType {
    Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    DriverLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430",
    BirthСertificate = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
}
interface IOwner {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    documentType: MyDocumentType;
    documentSeries: string;
    documentNumber: string;
    displayInfo(): void;
}
declare class Owner implements IOwner {
    private _firstName;
    private _middleName;
    private _lastName;
    private _dateOfBirth;
    private _documentType;
    private _documentSeries;
    private _documentNumber;
    constructor(firstName: string, middleName: string, lastName: string, dateOfBirth: Date, documentType: MyDocumentType, documentSeries: string, documentNumber: string);
    displayInfo(): void;
    get firstName(): string;
    set firstName(arg: string);
    get middleName(): string;
    set middleName(arg: string);
    get lastName(): string;
    set lastName(arg: string);
    get dateOfBirth(): Date;
    set dateOfBirth(arg: Date);
    get documentType(): MyDocumentType;
    set documentType(arg: MyDocumentType);
    get documentSeries(): string;
    set documentSeries(arg: string);
    get documentNumber(): string;
    set documentNumber(arg: string);
}
declare const owner: Owner;
interface IVehicle {
    brand: string;
    model: string;
    yearOfManufacture: number;
    vin: string;
    registrationNumber: string;
    owner: IOwner;
    displayInfo(): void;
}
declare class Vehicle implements IVehicle {
    private _brand;
    private _model;
    private _yearOfManufacture;
    private _vin;
    private _registrationNumber;
    private _owner;
    constructor(brand: string, model: string, yearOfManufacture: number, vin: string, registrationNumber: string, owner: IOwner);
    displayInfo(): void;
    get brand(): string;
    set brand(arg: string);
    get model(): string;
    set model(arg: string);
    get yearOfManufacture(): number;
    set yearOfManufacture(arg: number);
    get vin(): string;
    set vin(arg: string);
    get registrationNumber(): string;
    set registrationNumber(arg: string);
    get owner(): IOwner;
    set owner(arg: IOwner);
}
declare const vehicle: Vehicle;
declare enum BodyType {
    SEDAN = "\u0421\u0435\u0434\u0430\u043D",
    SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
    HATCHBACK = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
    COUPE = "\u041A\u0443\u043F\u0435"
}
declare enum CarClass {
    ECONOMY = "\u042D\u043A\u043E\u043D\u043E\u043C",
    BUSINESS = "\u0411\u0438\u0437\u043D\u0435\u0441",
    PREMIUM = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C"
}
interface ICar extends IVehicle {
    bodyType: BodyType;
    carClass: CarClass;
    displayInfo(): void;
}
declare class Car extends Vehicle implements ICar {
    private _bodyType;
    private _carClass;
    constructor(brand: string, model: string, yearOfManufacture: number, vin: string, registrationNumber: string, owner: IOwner, bodyType: BodyType, carClass: CarClass);
    displayInfo(): void;
    get bodyType(): BodyType;
    set bodyType(arg: BodyType);
    get carClass(): CarClass;
    set carClass(arg: CarClass);
}
declare const car: Car;
interface IMotorbike extends IVehicle {
    frameType: string;
    isSport: boolean;
    displayInfo(): void;
}
declare class Motorbike extends Vehicle implements IMotorbike {
    private _frameType;
    private _isSport;
    constructor(brand: string, model: string, yearOfManufacture: number, vin: string, registrationNumber: string, owner: IOwner, frameType: string, sSport: boolean);
    displayInfo(): void;
    get frameType(): string;
    set frameType(arg: string);
    get isSport(): boolean;
    set isSport(arg: boolean);
}
declare const motorbike: Motorbike;
interface IVehicleStorage<T extends IVehicle> {
    created: Date;
    data: T[];
    getAll: () => T[];
}
declare class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
    private readonly _created;
    private _data;
    get created(): Date;
    get data(): T[];
    constructor();
    getAll(): T[];
    remove(index: number): void;
    save(data: T): void;
}
declare let storage: VehicleStorage<Car>;
declare const allCars: Car[];

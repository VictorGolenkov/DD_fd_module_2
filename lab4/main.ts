import { Transport } from "./module.js";
import IOwner = Transport.IOwner;
import Owner = Transport.Owner;
import IVehicle = Transport.IVehicle;
import Vehicle = Transport.Vehicle;
import Car = Transport.Car;
import ICar = Transport.ICar;
import Motorbike = Transport.Motorbike;
import IMotorbike = Transport.IMotorbike;
import MyDocumentType = Transport.MyDocumentType;
import BodyType = Transport.BodyType;
import CarClass = Transport.CarClass;
import IVehicleStorage = Transport.IVehicleStorage;
import VehicleStorage = Transport.VehicleStorage;

const owner = new Owner(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1985, 5, 15), // 15 июня 1985
    MyDocumentType.Passport,
    "0000",
    "123456"
);

owner.displayInfo();

const vehicle = new Vehicle(
    "Toyota",
    "Camry",
    2020,
    "1HGBH41JXMN109186",
    "A123BC",
    owner
);

vehicle.displayInfo();

const car = new Car(
    "Toyota21",
    "Camry312",
    2020,
    "1HGBH41JXMN109186",
    "A123BC",
    owner,
    BodyType.COUPE,
    CarClass.PREMIUM
);

car.displayInfo();

const motorbike = new Motorbike(
    'Yamaha',
    'YZF-R1',
    2020,
    "1HGBH41JXMN109186",
    "A123BC",
    owner,
    'Спортивная',
    true
);

motorbike.displayInfo();

let storage = new VehicleStorage<Vehicle>;
storage.save(vehicle);
storage.save(car);
storage.save(motorbike);

let storage2 = new VehicleStorage<Car>;
storage2.save(car);
storage2.save(new Car('Honda', 'Accord', 2019, "1HGBH41JXMN109186", "A123BC", owner, BodyType.SEDAN, CarClass.ECONOMY));

const allCars = storage.getAll();

allCars.forEach(car => car.displayInfo());

const allCars2 = storage2.getAll();

allCars2.forEach(car => car.displayInfo());
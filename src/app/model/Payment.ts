import { Vehicle } from './vehicle';

export class Payment {
    idPayment: number;
    licenceNumber: string;
    engine: string;
    hourCheckIn: Date;
    hourCheckOut: Date;
    timeInside: Number;
    priceByHour: string;
    totalPrice: string;
    vehicle: Vehicle;
}

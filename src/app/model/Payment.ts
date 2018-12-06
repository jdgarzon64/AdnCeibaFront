import { Vehicle } from './vehicle';

export class Payment {
    idPayment: number;
    licenceNumber: string;
    engine: string;
    hourCheckIn: string;
    hourCheckOut: string;
    timeInside: string;
    priceByHour: string;
    totalPrice: string;
    vehicle: Vehicle;
}
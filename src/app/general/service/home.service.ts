import { Vehicle } from './../../model/vehicle';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parking } from 'src/app/model/parking';
import { InputParking } from '../dto/input-parking';
import { InputPayment } from '../dto/input-payment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getAllParkings(): Observable<Parking[]> {
    return this.http.get<Parking[]>('http://localhost:8080/getall');
  }

  createVehicleParking(vehicle: Vehicle): Observable<InputParking> {
    return this.http.post<InputParking>('http://localhost:8080/save', vehicle, this.httpOptions);
  }

  generatePayment(vehicle: Vehicle): Observable<InputPayment> {
    return this.http.post<InputPayment>('http://localhost:8080/payment', vehicle, this.httpOptions);
  }
  getCurrentDollarPrice(): Observable<any> {
    return this.http.get<any>('http://free.currencyconverterapi.com/api/v5/convert?q=USD_COP&compact=y');
  }
}

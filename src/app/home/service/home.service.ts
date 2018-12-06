import { Vehicle } from './../../model/vehicle';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parking } from 'src/app/model/parking';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};

  constructor(private http: HttpClient) { }

  getAllParkings(): Observable<Parking[]> {
    return this.http.get<Parking[]>('http://localhost:8080/getall');
  }

  createVehicleParking(vehicle: Vehicle): Observable<Vehicle[]> {
    return this.http.post<Vehicle[]>('http://localhost:8080/save', vehicle, this.httpOptions);
  }

}

import { Parking } from './../model/parking';
import { HomeService } from './service/home.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorState } from '../share/error-matcher';
import { Vehicle } from '../model/vehicle';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matcher = new ErrorState();
  vehicle: Vehicle = new Vehicle();
  vehiclePayment: Vehicle = new Vehicle();
  vehicleType = ['Car', 'Motorcycle'];
  registryVehicle: FormGroup;
  paymentVehicle: FormGroup;
  vehicleList: Parking[];

  constructor(private fb: FormBuilder, private homeService: HomeService, private http: HttpClient) {
    this.buildForm();
    this.loadAllVehicles();
  }

  ngOnInit() {
  }

  buildForm() {
    this.registryVehicle = this.fb.group({
      licence: ['', Validators.compose([Validators.required])],
      engine: ['', Validators.compose([Validators.required])],
      type: ['', Validators.compose([Validators.required])]
    });

    this.paymentVehicle = this.fb.group({
      payLicence: ['', Validators.compose([Validators.required])]
    });
  }

  generatePayment() {
    console.log(this.vehiclePayment);
  }

  onSubmit() {
    this.homeService.createVehicleParking(this.vehicle).subscribe(v => console.log(v));
  }

  loadAllVehicles() {
    this.homeService.getAllParkings().subscribe(data => {
      this.vehicleList = data;
      console.log(this.vehicleList);
    }, error => {
      console.error(error);
    }
    );
  }

  saveVehicle(){
    
  }


}

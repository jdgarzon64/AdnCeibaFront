import { Parking } from './../model/parking';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorState } from '../shared/error-matcher';
import { Vehicle } from '../model/vehicle';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../general/service/home.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  matcher = new ErrorState();
  vehiclePayment: Vehicle = new Vehicle();
  paymentVehicle: FormGroup;
  constructor(private fb: FormBuilder, private homeService: HomeService, private http: HttpClient) {
    this.buildForm();
  }
  ngOnInit() {
  }
  buildForm() {
    this.paymentVehicle = this.fb.group({
      payLicence: ['', Validators.compose([Validators.required])]
    });
  }
  generatePayment() {
    this.homeService.generatePayment(this.vehiclePayment).subscribe(v => console.log(v));
    console.log(this.vehiclePayment);
  }
}

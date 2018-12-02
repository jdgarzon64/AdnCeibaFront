import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorState } from '../share/error-matcher';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matcher = new ErrorState();
  vehicle: Vehicle = new Vehicle();
  vehicleType = ['Car','Motorcycle'];
  registryVehicle: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit() {
 
  }
  buildForm() {
    this.registryVehicle = this.fb.group({
      licence: ['', Validators.compose([Validators.required])],
      engine: ['', Validators.compose([Validators.required])]
    });
  }
}

import { Parking } from './../model/parking';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorState } from '../shared/error-matcher';
import { Vehicle } from '../model/vehicle';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../general/service/home.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopUpMessageComponent } from '../general/pop-up-message/pop-up-message.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messageOk = 'The Vehicle Has Been Registered!';
  messageBadRequest = 'Please complete the fields correctly';
  matcher = new ErrorState();
  vehicle: Vehicle = new Vehicle();
  vehicleType = ['Car', 'Motorcycle'];
  registryVehicle: FormGroup;
  vehicleList: Parking[];

  constructor(private fb: FormBuilder, private homeService: HomeService, public dialog: MatDialog) {
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
  }

  onSubmit() {
    this.homeService.createVehicleParking(this.vehicle)
    .subscribe((v: any) => {
      this.loadResponse(this.messageOk);
    }, (error: any) => {
      this.loadResponse(error.error.message);
    });
  }

  loadAllVehicles() {
    this.homeService.getAllParkings().subscribe(data => {
      this.vehicleList = data;
      console.log(this.vehicleList);
    }, error => {
      this.loadResponse(error.error.message);
    }
    );
  }


loadResponse(message: any) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '300px';
  dialogConfig.height = '255px';

  dialogConfig.data = {
    message: message
  };
  this.dialog.open(PopUpMessageComponent, dialogConfig);
  this.cleanFields();
}
cleanFields() {
  this.registryVehicle.reset();
}

}

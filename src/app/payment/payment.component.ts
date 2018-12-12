import { Payment } from './../model/Payment';
import { PopUpPaymentComponent } from './modal/pop-up-payment/pop-up-payment.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorState } from '../shared/error-matcher';
import { Vehicle } from '../model/vehicle';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../general/service/home.service';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { InputPayment } from '../general/dto/input-payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  message = '';
  // messageFail = 'This Vehicle Doesnt Exist';
  matcher = new ErrorState();
  vehiclePayment: Vehicle = new Vehicle();
  paymentVehicle: FormGroup;
  constructor(private fb: FormBuilder, private homeService: HomeService,
    public dialog: MatDialog, private http: HttpClient, public snackBar: MatSnackBar) {
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
    this.homeService.generatePayment(this.vehiclePayment).subscribe(v => {
      console.log(v);
      this.message = v.message;
      this.loadResponse(v);
    }, error => {
      this.snackbarMessage(error.error.message);
    });
  }

  loadResponse(payment: InputPayment) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '350px';
    dialogConfig.height = '400px';
    dialogConfig.data = {
      payment: payment.payment,
      message: payment.message
    };
    this.dialog.open(PopUpPaymentComponent, dialogConfig);
    this.cleanFields();
  }
  snackbarMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
  cleanFields() {
    this.paymentVehicle.reset();
  }
}

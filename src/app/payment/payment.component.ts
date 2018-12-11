import { Payment } from './../model/Payment';
import { PopUpPaymentComponent } from './modal/pop-up-payment/pop-up-payment.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorState } from '../shared/error-matcher';
import { Vehicle } from '../model/vehicle';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../general/service/home.service';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  messageOk = 'Transaction Complete';
  messageFail = 'We cant Find the Vehicle';
  matcher = new ErrorState();
  vehiclePayment: Vehicle = new Vehicle();
  paymentVehicle: FormGroup;
  constructor(private fb: FormBuilder, private homeService: HomeService,
    public dialog: MatDialog, private http: HttpClient,public snackBar: MatSnackBar) {
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
      this.loadResponse(v, this.messageOk);
    }, error => {
      this.snackbarMessage(this.messageFail);
    });
  }

  loadResponse(payment: Payment, message: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '350px';
    dialogConfig.height = '400px';
    dialogConfig.data = {
      payment: payment,
      message: message
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

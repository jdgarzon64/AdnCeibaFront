import { Payment } from 'src/app/model/Payment';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PopUpMessageComponent } from 'src/app/general/pop-up-message/pop-up-message.component';

@Component({
  selector: 'app-pop-up-payment',
  templateUrl: './pop-up-payment.component.html',
  styleUrls: ['./pop-up-payment.component.css']
})
export class PopUpPaymentComponent implements OnInit {
  payment: Payment;
  constructor(public dialogRef: MatDialogRef<PopUpMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.payment = data.payment;
    console.log('my payment ', this.payment);
  }

  ngOnInit() {
  }
  onClickPositiveResponse() {
    this.dialogRef.close();
  }
}

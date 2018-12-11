import { PaymentComponent } from './payment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PopUpPaymentComponent } from './modal/pop-up-payment/pop-up-payment.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [PaymentComponent, PopUpPaymentComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [PaymentComponent],
  entryComponents: [PopUpPaymentComponent]
})
export class PaymentModule { }

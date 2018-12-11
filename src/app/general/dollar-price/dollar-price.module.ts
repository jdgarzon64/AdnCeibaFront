import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DollarPriceComponent } from './dollar-price.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DollarPriceComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [DollarPriceComponent]
})
export class DollarPriceModule { }

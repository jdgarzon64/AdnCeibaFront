import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DollarPriceComponent } from './dollar-price.component';

@NgModule({
  declarations: [DollarPriceComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [DollarPriceComponent]
})
export class DollarPriceModule { }

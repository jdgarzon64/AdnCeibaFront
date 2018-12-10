import { DisponibilityComponent } from './disponibility.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DisponibilityComponent],
  imports: [
    CommonModule
  ],
  exports: [ DisponibilityComponent ]
})
export class DisponibilityModule { }

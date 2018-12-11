import { DisponibilityComponent } from './disponibility.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [DisponibilityComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [ DisponibilityComponent ]
})
export class DisponibilityModule { }

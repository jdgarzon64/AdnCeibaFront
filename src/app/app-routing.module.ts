import { PaymentComponent } from './payment/payment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'payments', component: PaymentComponent },
{ path: 'disponibility', component: DisponibilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

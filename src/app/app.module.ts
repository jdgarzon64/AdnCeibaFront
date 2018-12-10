import { DollarPriceModule } from './general/dollar-price/dollar-price.module';
import { PaymentModule } from './payment/payment.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './general/service/home.service';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { DisponibilityModule } from './disponibility/disponibility.module';
import { PopUpMessageComponent } from './general/pop-up-message/pop-up-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PopUpMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    MatToolbarModule,
    MatButtonModule,
    PaymentModule,
    DisponibilityModule,
    DollarPriceModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

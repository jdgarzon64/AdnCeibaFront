import { Dollar } from './../../model/dollar';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-dollar-price',
  templateUrl: './dollar-price.component.html',
  styleUrls: ['./dollar-price.component.css']
})
export class DollarPriceComponent implements OnInit {
  dollar: any;
  constructor( private homeService: HomeService) { }
  ngOnInit() {
    this.getCurrentDollarValue();
  }
  getCurrentDollarValue() {
    this.homeService.getCurrentDollarPrice().subscribe(x => {
      console.log(x);
       this.dollar = x;
       this.dollar = this.dollar.USD_COP.val;
    });
  }
}

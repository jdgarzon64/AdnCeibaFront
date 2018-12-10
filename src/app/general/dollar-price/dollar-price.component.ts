import { Dollar } from './../../model/dollar';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-dollar-price',
  templateUrl: './dollar-price.component.html',
  styleUrls: ['./dollar-price.component.css']
})
export class DollarPriceComponent implements OnInit {
  dollar: Dollar = new Dollar();
  constructor( private homeService: HomeService) { }
  ngOnInit() {
  }
  getCurrentDollarValue() {
    this.homeService.getCurrentDollarPrice().subscribe((x) => {
       this.dollar = x;
       //console.log(x);
    });
  }
}

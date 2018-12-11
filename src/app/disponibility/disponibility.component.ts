import { HomeService } from './../general/service/home.service';
import { Parking } from './../model/parking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disponibility',
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.css']
})
export class DisponibilityComponent implements OnInit {
  parkingList: Parking[];
  displayedColumns: string[] = ['licence', 'checkIn', 'type'];
  constructor(private homeService: HomeService) {
    this.getParkingList();
   }

  ngOnInit() {
  }
  getParkingList() {
    this.homeService.getAllParkings().subscribe((x: Parking[]) => {
      this.parkingList = x;
      console.log(x);
    }, error => {
      console.log(error);
    });
  }
}

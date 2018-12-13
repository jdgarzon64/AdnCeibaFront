import { HomeService } from './../general/service/home.service';
import { Parking } from './../model/parking';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PopUpMessageComponent } from '../general/pop-up-message/pop-up-message.component';

@Component({
  selector: 'app-disponibility',
  templateUrl: './disponibility.component.html',
  styleUrls: ['./disponibility.component.css']
})
export class DisponibilityComponent implements OnInit {
  parkingList: Parking[];
  displayedColumns: string[] = ['licence', 'checkIn', 'type'];
  constructor(private homeService: HomeService, public dialog: MatDialog) {
    this.getParkingList();
  }

  ngOnInit() {
  }
  getParkingList() {
    this.homeService.getAllParkings().subscribe((x: Parking[]) => {
      this.parkingList = x;
      console.log(x);
    }, error => {
      this.loadResponse(error.error.message);
    });
  }

loadResponse(message: any) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '300px';
  dialogConfig.height = '255px';

  dialogConfig.data = {
    message: message
  };
  this.dialog.open(PopUpMessageComponent, dialogConfig);
}
}

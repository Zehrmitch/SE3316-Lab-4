import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { ListSchedules } from 'src/app/Models/list-schedules.model';

@Component({
  selector: 'app-view-and-edit',
  templateUrl: './view-and-edit.component.html',
  styleUrls: ['./view-and-edit.component.css']
})
export class ViewAndEditComponent implements OnInit {

  schedules: ListSchedules[];

  constructor(private service: RequestService) { }

  ngOnInit(): void {
  }

  displaySchedules() {
    this.service.listSchedules().subscribe(e => {
      console.log("e: " + e);
      Object.keys(e).map(function(key, index){
        console.log("key: " + key);
        this.schedules = key;
      });
    });
    return this.schedules;
  }
}

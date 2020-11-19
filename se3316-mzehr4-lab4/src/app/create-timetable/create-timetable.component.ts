import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { NewTimetable } from 'src/app/Models/new-timetable.model';
import { UpdateSchedule } from 'src/app/Models/update-schedule.model';

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrls: ['./create-timetable.component.css']
})
export class CreateTimetableComponent implements OnInit {

  courseList: NewTimetable = {
    info: ''
  };

  scheduleList: UpdateSchedule = {
    text: ''
  };

  constructor(private service: RequestService) { }

  ngOnInit(): void {
  }

  createNewSchedule(scheduleName: String) {
    this.service.createSchedule(scheduleName).subscribe(e => {
      this.courseList = e;
    });
    return this.courseList;
  }

  addCourses(scheduleName: String){
    let courses = {};
    for(var i = 1; i < 7; i++){
        var key = (<HTMLInputElement>document.getElementById(String(i) + "c")).value;
        var val = (<HTMLInputElement>document.getElementById(String(i) + "n")).value;
        if (key != "" && val != ""){
            courses[key] = val;
        }
    }
    this.service.updateSchedule(scheduleName, courses).subscribe(e => {
      this.scheduleList = e;
    });
    return this.scheduleList;
  }
}

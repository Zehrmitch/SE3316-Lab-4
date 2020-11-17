import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { SubjectList } from 'src/app/Models/subject-list.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display-all-subjects',
  templateUrl: './display-all-subjects.component.html',
  styleUrls: ['./display-all-subjects.component.css']
})
export class DisplayAllSubjectsComponent implements OnInit {

  courses: SubjectList[];

  constructor(private service: RequestService) { }

  ngOnInit(): void {
  }

  displaySubjects() {
    this.service.getSubjects().subscribe(e => {
      this.courses = e;
    });
    return this.courses;
  }

  hideSubjects() {
    this.service.getSubjects().subscribe(e => {
      this.courses = [];
    });
    return this.courses;
  }
  
}

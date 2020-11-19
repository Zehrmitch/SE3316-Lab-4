import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SubjectList } from './Models/subject-list.model';
import { CourseSearch } from './Models/course-search.model';
import { SearchTimetable } from './Models/search-timetable.model';
import { NewTimetable } from './Models/new-timetable.model';
import { UpdateSchedule } from './Models/update-schedule.model';
import { ListSchedules } from './Models/list-schedules.model';

const postHeader = new HttpHeaders().set("Content-Type","text/html; charset=utf-8");
const putHeader = new HttpHeaders().set("Content-Type","application/json; charset=utf-8");
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  router = 'http://localhost:3000/api';
  constructor(private http : HttpClient) { }

  getSubjects(): Observable<SubjectList[]> {
    return this.http.get<SubjectList[]>(this.router + '/nameAndCodes');
  }

  courseSearch(courseCode: String): Observable<CourseSearch[]> {
    return this.http.get<CourseSearch[]>(this.router + '/getCourseCodes/' + courseCode);
  }

  timetableSearch(subjectCode: String, courseCode: String): Observable<SearchTimetable[]> {
    return this.http.get<SearchTimetable[]>(this.router + '/getCourseSearch/' + subjectCode + '/' + String(courseCode));
  }

  createSchedule(scheduleName: String): Observable<NewTimetable> {
    return this.http.post<NewTimetable>(this.router + '/createSchedule/' + scheduleName, {}, {headers: postHeader});
  }

  updateSchedule(scheduleName: String, courses: {}): Observable<UpdateSchedule> {
    return this.http.put<UpdateSchedule>(this.router + '/updateSchedule/' + scheduleName, {body: JSON.stringify(courses)}, {headers: putHeader});
  }

  listSchedules(): Observable<ListSchedules[]> {
    return this.http.get<ListSchedules[]>(this.router + '/viewSchedules');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SubjectList } from './Models/subject-list.model';
import { CourseSearch } from './Models/course-search.model';
import { SearchTimetable } from './Models/search-timetable.model';

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
}
